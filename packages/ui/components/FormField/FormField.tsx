import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './FormField.module.css';

type BaseProps = {
  label: string;
  name: string;
};

type InputFieldProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & { as?: 'input' };

type TextareaFieldProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { as: 'textarea' };

type FormFieldProps = InputFieldProps | TextareaFieldProps;

export function FormField(props: FormFieldProps) {
  const { label, name, as = 'input', className, ...rest } = props;
  const fieldClasses = [styles.field, className].filter(Boolean).join(' ');

  return (
    <label className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      {as === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          className={`${fieldClasses} ${styles.textarea}`}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={name}
          name={name}
          className={fieldClasses}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </label>
  );
}