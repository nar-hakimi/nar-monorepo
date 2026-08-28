#!/usr/bin/env node
/**
 * check-docs-freshness.js
 *
 * Runs after every commit (via .githooks/post-commit). Inspects which
 * files changed in the commit and prints a reminder for any project doc
 * that likely needs a matching update.
 *
 * This is a REMINDER tool, not an auto-updater — it cannot rewrite the
 * docs itself. Take the flagged files into a Claude chat (with the
 * Project's existing docs as context) and ask for the specific section
 * to be updated, rather than expecting this script to do it.
 */

const { execSync } = require('child_process');

function getChangedFiles() {
  try {
    const output = execSync('git diff --name-only HEAD~1 HEAD', {
      encoding: 'utf-8',
    });
    return output.split('\n').filter(Boolean);
  } catch {
    // First commit in the repo — HEAD~1 doesn't exist yet.
    return execSync('git diff-tree --no-commit-id --name-only -r HEAD', {
      encoding: 'utf-8',
    })
      .split('\n')
      .filter(Boolean);
  }
}

// Each rule: a test against the changed file paths, and which doc(s) +
// what to check if it matches. Order doesn't matter; all matching rules fire.
const RULES = [
  {
    test: (f) => f.startsWith('packages/ui/components/') && f.includes('/'),
    doc: 'REPO_STRUCTURE.md',
    note: 'Component added/changed under packages/ui/components — confirm the component inventory list and index.ts barrel export are current.',
  },
  {
    test: (f) => f === 'packages/ui/tokens/primitives.css' || f.endsWith('styles/tokens.css'),
    doc: 'REPO_STRUCTURE.md + PROJECT_CONTEXT.md',
    note: 'Token file changed — confirm the color/type tables in both docs still match the real values.',
  },
  {
    test: (f) => /^apps\/nar-ventures\/app\/.*\/page\.tsx$/.test(f) || f === 'apps/nar-ventures/app/page.tsx',
    doc: 'SITEMAP.md',
    note: 'A page.tsx was added or changed — update the Status column (wireframe → built → verified) for the matching route.',
  },
  {
    test: (f) => f.includes('next.config') || f === 'turbo.json' || f === 'package.json' || f.endsWith('tsconfig.json'),
    doc: 'REPO_STRUCTURE.md',
    note: 'Build/config file changed — if this was fixing a bug or gotcha, add it to the Gotchas section so it isn\'t re-debugged later.',
  },
  {
    test: (f) => f === 'CONTENT.md',
    doc: '(none — CONTENT.md is the source of truth)',
    note: 'CONTENT.md itself changed — no action, just confirm the live pages that use this copy still match.',
  },
];

function main() {
  const changed = getChangedFiles();
  if (changed.length === 0) return;

  const fired = new Map(); // doc -> Set of notes

  for (const file of changed) {
    for (const rule of RULES) {
      if (rule.test(file)) {
        if (!fired.has(rule.doc)) fired.set(rule.doc, new Set());
        fired.get(rule.doc).add(rule.note);
      }
    }
  }

  if (fired.size === 0) return;

  console.log('\n📋 Docs that may need updating after this commit:\n');
  for (const [doc, notes] of fired) {
    console.log(`  → ${doc}`);
    for (const note of notes) {
      console.log(`      ${note}`);
    }
  }
  console.log('\n   Take this commit\'s diff into a Claude chat (with the Project\'s');
  console.log('   docs attached) and ask it to update the flagged sections.\n');
}

main();
