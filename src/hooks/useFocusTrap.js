import { useEffect } from 'react';

const FOCUSABLE = ['a[href]', 'button:not([disabled])', '[tabindex]:not([tabindex="-1"])'].join(
	', ',
);

export function useFocusTrap(containerRef, isActive, onEscape) {
	useEffect(() => {
		if (!isActive || !containerRef.current) return;

		const container = containerRef.current;

		// Move focus into the overlay on open
		const firstFocusable = container.querySelectorAll(FOCUSABLE)[0];
		if (firstFocusable) firstFocusable.focus();

		function handleKeyDown(e) {
			if (e.key === 'Escape') {
				onEscape();
				return;
			}

			if (e.key !== 'Tab') return;

			const focusables = Array.from(container.querySelectorAll(FOCUSABLE));
			if (focusables.length === 0) return;

			const first = focusables[0];
			const last = focusables[focusables.length - 1];

			if (e.shiftKey) {
				// Shift+Tab — wrap backward
				if (document.activeElement === first) {
					e.preventDefault();
					last.focus();
				}
			} else {
				// Tab — wrap forward
				if (document.activeElement === last) {
					e.preventDefault();
					first.focus();
				}
			}
		}

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isActive, containerRef, onEscape]);
}
