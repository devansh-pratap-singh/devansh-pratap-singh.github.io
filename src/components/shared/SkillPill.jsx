import styles from './SkillPill.module.css';

export function SkillPill({ name, primary = false }) {
	return (
		<span className={`${styles.pill} ${primary ? styles.primary : styles.secondary}`}>
			{name}
		</span>
	);
}
