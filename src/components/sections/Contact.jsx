import { motion } from 'framer-motion';
import { SectionLabel } from '../shared/SectionLabel';
import { ExternalLink } from '../shared/ExternalLink';
import { meta } from '../../data/portfolio';
import styles from './Contact.module.css';

const fadeUp = {
	hidden: { opacity: 0, y: 16 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
	},
};

const stagger = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const LINKS = [
	{ label: 'Email', href: meta.email },
	{ label: 'LinkedIn', href: meta.linkedin },
	{ label: 'GitHub', href: meta.github },
];

export function Contact() {
	return (
		<section
			id='contact'
			className={'section ' + styles.contact}
			aria-label='Contact'
		>
			<div className='container'>
				<SectionLabel>Contact</SectionLabel>

				<motion.blockquote
					className={styles.quote}
					variants={fadeUp}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-80px' }}
				>
					Always open to connecting with people who see data as
					possibilities.
				</motion.blockquote>

				<motion.ul
					className={styles.links}
					role='list'
					aria-label='Contact links'
					variants={stagger}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, margin: '-80px' }}
				>
					{LINKS.map(({ label, href }) => (
						<motion.li key={label} variants={fadeUp}>
							<ExternalLink href={href} className={styles.link}>
								{label}
							</ExternalLink>
						</motion.li>
					))}
				</motion.ul>
			</div>
		</section>
	);
}
