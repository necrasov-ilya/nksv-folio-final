// Animate preloader NKSV logo into header logo position (FLIP). Progressive, non-breaking.
export async function logoHandoff({ preloaderSelector = '.nksv-logo', headerSelector = '.logo__image', backdropSelector = '.preloader', fadeSelector = '.preloader__overlay', duration = 700 } = {}) {
  try {
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pre = document.querySelector(preloaderSelector);
    const header = document.querySelector(headerSelector);
  const backdrop = document.querySelector(backdropSelector);
    const fadeEl = document.querySelector(fadeSelector);
    if (!pre || !header || reduce) {
      // Fallback: quick fade-out only
      if (backdrop) backdrop.classList.add('preloader--hidden');
      await new Promise(r => setTimeout(r, 300));
      return;
    }

  // Wait next frame to ensure header layout is ready
  await new Promise(r => requestAnimationFrame(() => r()));
  // Measure
  const from = pre.getBoundingClientRect();
  const to = header.getBoundingClientRect();
    if (!from.width || !from.height || !to.width || !to.height) {
      if (backdrop) backdrop.classList.add('preloader--hidden');
      await new Promise(r => setTimeout(r, 300));
      return;
    }

    // Prepare ghost clone
    const ghost = pre.cloneNode(true);
    Object.assign(ghost.style, {
      position: 'fixed',
      left: `${from.left}px`,
      top: `${from.top}px`,
      width: `${from.width}px`,
      height: `${from.height}px`,
      transformOrigin: 'top left',
      willChange: 'transform, opacity',
      zIndex: 10000,
      pointerEvents: 'none',
      opacity: '0',
    });
    // Ensure no CSS animations keep it invisible
    ghost.style.animation = 'none';
    ghost.querySelectorAll('*').forEach((el) => {
      el.style.animation = 'none';
      // Force draw state fully visible
      el.style.strokeDashoffset = 0;
      el.style.opacity = 1;
    });
  document.body.appendChild(ghost);

  // Show ghost first to avoid any gap, then hide preloader logo only
  await new Promise(r => requestAnimationFrame(() => r()));
  ghost.style.opacity = '1';
  const prevPreVis = pre.style.visibility;
  pre.style.visibility = 'hidden';

    // Compute transform
    const dx = to.left - from.left;
    const dy = to.top - from.top;
    const sx = to.width / from.width;
    const sy = to.height / from.height;

    // Curved speed profile: slow-out, accelerate mid, gentle settle at end
    const p1 = 0.06; // 6% progress at 15% time — slow start
    const p2 = 0.82; // 82% progress at 55% time — fast middle
    const p3 = 0.97; // 97% progress at 85% time — ease-in end
    const kfAt = (p) => ({
      transform: `translate3d(${dx * p}px, ${dy * p}px, 0) scale(${1 + (sx - 1) * p}, ${1 + (sy - 1) * p})`,
      opacity: 1,
    });
    const keyframes = [
      { offset: 0.0, ...kfAt(0), easing: 'cubic-bezier(0.35, 0.0, 0.65, 1.0)' },
      { offset: 0.15, ...kfAt(p1), easing: 'cubic-bezier(0.05, 0.7, 0.2, 1)' },
      { offset: 0.55, ...kfAt(p2), easing: 'cubic-bezier(0.2, 0.6, 0.1, 1)' },
      { offset: 0.85, ...kfAt(p3), easing: 'cubic-bezier(0.25, 0.8, 0.25, 1)' },
      { offset: 1.0, ...kfAt(1) },
    ];
    const easing = 'cubic-bezier(0.2, 0.7, 0.1, 1)';

  const ghostAnim = ghost.animate(keyframes, { duration, easing, fill: 'forwards' });
  // Fade whole preloader container (keeps ghost visible since it's outside)
  backdrop?.animate?.([{ opacity: 1 }, { opacity: 0 }], { duration: Math.min(600, duration), delay: 80, easing: 'ease', fill: 'forwards' });
  // Optionally fade overlay a bit faster to emphasize content
  fadeEl?.animate?.([{ opacity: 1 }, { opacity: 0 }], { duration: Math.min(400, duration), delay: 0, easing: 'ease', fill: 'forwards' });

  await ghostAnim.finished.catch(() => {});

  // Crossfade with overlap to avoid flicker
  const headerFade = 260;
  const ghostFade = 220;
  const overlapDelay = 80; // header starts first

  // Bring header logo in, overriding preloading CSS via inline opacity
  header.style.transition = `opacity ${headerFade}ms ease`;
  header.style.opacity = '0';
  // Force reflow to apply starting opacity
  void header.offsetWidth; // reflow
  header.style.opacity = '1';

  // Fade ghost out after a short overlap
  ghost.animate([{ opacity: 1 }, { opacity: 0 }], { duration: ghostFade, delay: overlapDelay, easing: 'ease', fill: 'forwards' });

  // Wait until both are done
  const totalWait = Math.max(headerFade, overlapDelay + ghostFade) + 20;
  await new Promise(r => setTimeout(r, totalWait));
  document.documentElement.classList.remove('is-preloading');

    // Cleanup
  ghost.remove();
  pre.style.visibility = prevPreVis;
  // Cleanup inline styles
  header.style.opacity = '';
  header.style.transition = '';
  if (backdrop) backdrop.classList.add('preloader--hidden');
  await new Promise(r => setTimeout(r, 320));
  } catch {
    // Silent fallback
    const backdrop = document.querySelector('.preloader');
    if (backdrop) backdrop.classList.add('preloader--hidden');
    await new Promise(r => setTimeout(r, 300));
  }
}
