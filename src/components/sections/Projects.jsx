import { motion } from 'framer-motion';
import { SectionLabel } from '../shared/SectionLabel';
import { ProjectCard } from '../shared/ProjectCard';
import { ExternalLink } from '../shared/ExternalLink';
import { projects, moreProjectsUrl } from '../../data/portfolio';
import styles from './Projects.module.css';

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export function Projects() {
  return (
    <section id="projects" className={"section " + styles.projects} aria-label="Projects">
      <div className="container">
        <SectionLabel>Projects</SectionLabel>

        <motion.div
          className={styles.list}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.more}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          <ExternalLink href={moreProjectsUrl} className={styles.moreLink}>
            More on LinkedIn
          </ExternalLink>
        </motion.div>
      </div>
    </section>
  );
}