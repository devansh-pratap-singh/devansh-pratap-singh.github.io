import styles from './SectionLabel.module.css';

// Decorative uppercase label rendered above section headings.
// aria-hidden — each <section> carries its own aria-label.
export function SectionLabel({ children }) {
  return (
    <p className={styles.label} aria-hidden="true">
      {children}
    </p>
  );
}