import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

function useRevealAnimation(ref, targetClass, shouldAutoPlay = false, customOptions) {
  const hasTriggeredRef = useRef(false);

  const fadeAnimation = {
    targets: '.reveal-fade-' + targetClass,
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutQuad',
    delay: anime.stagger(500),
    autoplay: shouldAutoPlay,
    ...customOptions,
  };

  const slideAnimation = {
    targets: '.reveal-slide-' + targetClass,
    opacity: [0, 1],
    translateX: [-100, 0],
    duration: 1000,
    easing: 'easeOutQuad',
    delay: anime.stagger(500),
    autoplay: false,
    ...customOptions,
  };

  useEffect(() => {
    const element = ref.current;
    if (!hasTriggeredRef.current) {
      const tl = anime.timeline({ ...fadeAnimation }).add({ ...slideAnimation });

      if (shouldAutoPlay) {
        hasTriggeredRef.current = true;
      } else {
        const handleScroll = () => {
          const targetRect = element.getBoundingClientRect();
          const triggerPosition = targetRect.top + window.scrollY - window.innerHeight * 0.5;

          if (window.scrollY >= triggerPosition && !hasTriggeredRef.current) {
            tl.play();

            hasTriggeredRef.current = true;
          }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    }
  }, [ref]);
}

export default useRevealAnimation;
