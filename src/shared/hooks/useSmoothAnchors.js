import { useEffect } from 'react';

export const useSmoothAnchors = (defaultOffset = 80) => {
	useEffect(() => {
		const onClick = (e) => {
			const anchor = e.target.closest && e.target.closest('a[href^="#"]');
			if (!anchor) return;

			const href = anchor.getAttribute('href');
			if (!href || href === '#' || href.length < 2) return;

			try {
				const url = new URL(anchor.href);
				const samePage = url.origin === window.location.origin && url.pathname === window.location.pathname;
				if (!samePage) return;
			} catch (_) {
				// In dev/Vite during HMR, URL parsing can fail for virtual anchors; ignore
			}

			const id = decodeURIComponent(href.slice(1));
			const target = document.getElementById(id);
			if (!target) return;

			e.preventDefault();

					const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
					if (prefersReduced) {
						target.scrollIntoView({ block: 'start' });
					} else {
						target.scrollIntoView({ behavior: 'smooth', block: 'start' });
					}

			history.pushState(null, '', `#${id}`);
		};

		document.addEventListener('click', onClick);
		return () => document.removeEventListener('click', onClick);
	}, [defaultOffset]);
};

export default useSmoothAnchors;
