import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const TARGET_BLANK = "_blank";
const REL_EXTERNAL = "noopener noreferrer";

export function ProjectCard({ project }) {
  const { title, description, tags, url, primary } = project;
  const cardClass = styles.card + " " + (primary ? styles.primary : styles.secondary);

  return (
    <motion.a
      href={url}
      target={TARGET_BLANK}
      rel={REL_EXTERNAL}
      className={cardClass}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.tags} aria-label="Technologies">
          {tags.map((tag) => (
            <li key={tag} className={styles.tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <p className={styles.desc}>{description}</p>
    </motion.a>
  );
}