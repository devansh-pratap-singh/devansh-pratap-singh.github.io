import { motion } from 'framer-motion';
import { SectionLabel } from '../shared/SectionLabel';
import { SkillPill } from '../shared/SkillPill';
import { skills } from '../../data/portfolio';
import styles from './Skills.module.css';

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const pillVariants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`} aria-label="Skills">
      <div className="container">
        <SectionLabel>Skills</SectionLabel>
        <div className={styles.groups}>
          {skills.groups.map((group) => (
            <div key={group.id} className={styles.group}>
              <h2 className={styles.groupLabel}>{group.label}</h2>
              <motion.ul
                className={styles.pills}
                role="list"
                aria-label={group.label}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {group.items.map((item) => (
                  <motion.li key={item.name} variants={pillVariants}>
                    <SkillPill name={item.name} primary={item.primary} />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}