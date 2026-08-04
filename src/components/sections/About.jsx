import { motion } from 'framer-motion';
import { SectionLabel } from '../shared/SectionLabel';
import { about } from '../../data/portfolio';
import styles from './About.module.css';

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
	},
};

const stagger = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } },
};

export function About() {
	return (
		<section id='about' className={`section ${styles.about}`} aria-label='About'>
			<div className='container'>
				<motion.div
					variants={stagger}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-80px' }}
				>
					<motion.div variants={fadeUp}>
						<SectionLabel>About</SectionLabel>
					</motion.div>
					<motion.blockquote className={styles.pullQuote} variants={fadeUp}>
						{about.pullQuote}
					</motion.blockquote>
					<motion.p className={styles.body} variants={fadeUp}>
						{about.body}
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
}
