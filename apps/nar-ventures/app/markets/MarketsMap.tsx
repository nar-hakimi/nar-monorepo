'use client';

import { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import styles from './MarketsMap.module.css';

// Low-resolution (110m) world topology — small file size, plenty of detail
// for a decorative map at this size. Free, open-source, no licensing cost.
const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const markers: { label: string; coordinates: [number, number] }[] = [
  { label: 'United States', coordinates: [-74.0, 40.7] }, // New York — NAR's actual anchor market per CONTENT.md
  { label: 'Europe', coordinates: [8.68, 50.11] }, // Central Europe (near Germany)
  { label: 'Emerging & Intl.', coordinates: [20, 2] }, // Central Africa
];

// react-simple-maps' <Geography> requires its own style={{ default, hover,
// pressed }} object rather than a className — hover/pressed match default
// since this map is purely decorative, not interactive.
const geographyStyle = {
  default: {
    fill: 'var(--color-paper-raised)',
    stroke: 'var(--color-ink)',
    strokeWidth: 0.4,
    outline: 'none',
  },
  hover: {
    fill: 'var(--color-paper-raised)',
    stroke: 'var(--color-ink)',
    strokeWidth: 0.4,
    outline: 'none',
  },
  pressed: {
    fill: 'var(--color-paper-raised)',
    stroke: 'var(--color-ink)',
    strokeWidth: 0.4,
    outline: 'none',
  },
};

export function MarketsMap() {
  // react-simple-maps computes marker positions via d3-geo's projection
  // math, which can produce a trailing-decimal floating-point difference
  // between server and client (same math, different JS engine rounding).
  // React flags any such mismatch as a hydration warning even though it's
  // visually imperceptible. Simplest fix: skip SSR for this component and
  // only render once mounted client-side, so there's no server HTML to
  // mismatch against.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={styles.panel} style={{ aspectRatio: '800 / 420' }} />;
  }

  return (
    <div className={styles.panel}>
      <ComposableMap
        width={800}
        height={420}
        projectionConfig={{ scale: 140 }}
        className={styles.map}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} style={geographyStyle} />
            ))
          }
        </Geographies>

        {markers.map((m) => (
          <Marker key={m.label} coordinates={m.coordinates}>
            <circle r={12} className={styles.markerRing} />
            <circle r={5} className={styles.markerDot} />
            <line x1={0} y1={0} x2={-42} y2={-16} className={styles.markerLine} />
            <text x={-48} y={-16} dy={4} textAnchor="end" className={styles.markerLabel}>
              {m.label}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}