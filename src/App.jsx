import { MotionConfig } from 'framer-motion';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';
import Navbar from './components/layout/Navbar';
import './App.css';

export default function App() {
	return (
		<MotionConfig reducedMotion='user'>
			<a href='#main-content' className='skip-link'>
				Skip to main content
			</a>

			<Navbar />

			<main id='main-content'>
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Projects />
				<Education />
				<Contact />
			</main>

			<footer
				style={{
					textAlign: 'center',
					padding: 'var(--space-6) 0',
					font: 'var(--text-caption)',
					color: 'var(--color-text-secondary)',
					borderTop: '1px solid var(--color-border)',
					transition:
						'border-color var(--duration-slow), color var(--duration-slow)',
				}}
			>
				© 2027 Devansh Pratap Singh. All rights reserved.
			</footer>
		</MotionConfig>
	);
}
