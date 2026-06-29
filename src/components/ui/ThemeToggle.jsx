import { useTheme, THEME_META, THEMES } from '../../hooks/useTheme';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={styles.toggle}
      role="group"
      aria-label="Select color theme"
    >
      {Object.values(THEMES).map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          aria-pressed={theme === t}
          className={`${styles.btn} ${theme === t ? styles.active : ''}`}
        >
          {THEME_META[t].label}
        </button>
      ))}
    </div>
  );
}