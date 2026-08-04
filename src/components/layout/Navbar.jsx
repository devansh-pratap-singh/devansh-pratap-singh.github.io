import { useState, useEffect, useRef, useCallback } from 'react';
import { meta } from '../../data/portfolio';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import styles from './Navbar.module.css';

const NAV_LINKS = [
	{ label: 'About', href: '#about' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Education', href: '#education' },
	{ label: 'Contact', href: '#contact' },
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const overlayRef = useRef(null);
	const burgerRef = useRef(null);

	// Scroll shadow
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	// Lock body scroll when menu is open
	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [menuOpen]);

	// Return focus to burger when menu closes
	useEffect(() => {
		if (!menuOpen && burgerRef.current) {
			burgerRef.current.focus();
		}
	}, [menuOpen]);

	const close = useCallback(() => setMenuOpen(false), []);

	// Focus trap — active only while overlay is open
	useFocusTrap(overlayRef, menuOpen, close);

	return (
		<header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role='banner'>
			<nav className={styles.nav} role='navigation' aria-label='Main navigation'>
				{/* Logo */}

				<a href='#main-content' className={styles.logo} aria-label='DPS - Back to top'>
					DPS
				</a>

				{/* Desktop links */}
				<ul className={styles.links} role='list'>
					{NAV_LINKS.map(({ label, href }) => (
						<li key={href}>
							<a href={href} className={styles.link}>
								{label}
							</a>
						</li>
					))}
				</ul>

				{/* Desktop controls */}
				<div className={styles.controls}>
					<ThemeToggle />
					<a
						href={meta.email}
						className={styles.cta}
						aria-label='Email Devansh — Hire me'
					>
						Hire me
					</a>
				</div>

				{/* Hamburger */}
				<button
					ref={burgerRef}
					className={styles.burger}
					onClick={() => setMenuOpen((o) => !o)}
					aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
					aria-expanded={menuOpen}
					aria-controls='mobile-menu'
				>
					<span className={`${styles.bar} ${menuOpen ? styles.b1 : ''}`} />
					<span className={`${styles.bar} ${menuOpen ? styles.b2 : ''}`} />
					<span className={`${styles.bar} ${menuOpen ? styles.b3 : ''}`} />
				</button>
			</nav>

			{/* Mobile overlay */}
			{menuOpen && (
				<div
					ref={overlayRef}
					id='mobile-menu'
					className={styles.overlay}
					role='dialog'
					aria-modal='true'
					aria-label='Navigation menu'
				>
					<ul className={styles.overlayLinks} role='list'>
						{NAV_LINKS.map(({ label, href }) => (
							<li key={href}>
								<a href={href} className={styles.overlayLink} onClick={close}>
									{label}
								</a>
							</li>
						))}
					</ul>
					<div className={styles.overlayControls}>
						<ThemeToggle />
						<a href={meta.email} className={styles.cta} onClick={close}>
							Hire me
						</a>
					</div>
				</div>
			)}
		</header>
	);
}
