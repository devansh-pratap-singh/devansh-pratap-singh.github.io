import { motion } from 'framer-motion';
import { SectionLabel } from '../shared/SectionLabel';
import { experience } from '../../data/portfolio';
import styles from './Experience.module.css';

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
	},
};

export function Experience() {
	return (
		<section
			id='experience'
			className={`section ${styles.experience}`}
			aria-label='Work experience'
		>
			<div className='container'>
				<SectionLabel>Experience</SectionLabel>
				<motion.div
					className={styles.list}
					variants={containerVariants}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-80px' }}
				>
					{experience.map((job) => (
						<motion.article
							key={job.id}
							className={`${styles.card} ${job.current ? styles.current : ''}`}
							variants={cardVariants}
							aria-label={`${job.role} at ${job.company}`}
						>
							<header className={styles.header}>
								<div>
									<h2 className={styles.role}>{job.role}</h2>
									<p className={styles.company}>
										{job.company}
									</p>
								</div>
								<time
									className={styles.period}
									dateTime={job.period}
								>
									{job.period}
								</time>
							</header>

							{job.bullets.length > 0 && (
								<ul
									className={styles.bullets}
									aria-label={`Responsibilities at ${job.company}`}
								>
									{job.bullets.map((bullet, i) => (
										<li key={i} className={styles.bullet}>
											{bullet}
										</li>
									))}
								</ul>
							)}
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	);
}
