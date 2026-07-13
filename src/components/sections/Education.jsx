import { motion } from 'framer-motion';
import { SectionLabel } from '../shared/SectionLabel';
import { ExternalLink } from '../shared/ExternalLink';
import { education, certifications, moreCertsUrl } from '../../data/portfolio';
import styles from './Education.module.css';

const containerVariants = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.09 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 16 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
	},
};

export function Education() {
	return (
		<section
			id='education'
			className={'section ' + styles.education}
			aria-label='Education'
		>
			<div className='container'>
				<div className={styles.block}>
					<SectionLabel>Education</SectionLabel>
					<motion.div
						className={styles.list}
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-80px' }}
					>
						{education.map((item) => (
							<motion.article
								key={item.id}
								className={styles.card}
								variants={itemVariants}
							>
								<h2 className={styles.degree}>{item.degree}</h2>
								<p className={styles.school}>{item.school}</p>
								<time className={styles.period}>
									{item.period}
								</time>
							</motion.article>
						))}
					</motion.div>
				</div>

				<div className={styles.block}>
					<SectionLabel>Certifications</SectionLabel>
					<motion.ul
						className={styles.certList}
						role='list'
						aria-label='Professional certifications'
						variants={containerVariants}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, margin: '-80px' }}
					>
						{certifications.map((cert) => (
							<motion.li key={cert.id} variants={itemVariants}>
								<ExternalLink
									href={cert.url}
									className={styles.certPill}
								>
									{cert.name}
								</ExternalLink>
							</motion.li>
						))}
					</motion.ul>

					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.2 }}
					>
						<ExternalLink
							href={moreCertsUrl}
							className={styles.moreLink}
						>
							More certifications
						</ExternalLink>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
