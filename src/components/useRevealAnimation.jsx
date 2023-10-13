import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

function useRevealAnimation(
  ref,
  targetClass,
  shouldAutoPlay = false,
  options = {
    opacity: [0, 1],
    translateX: [-100, 0],
    duration: 1000,
    easing: 'easeOutQuad',
    delay: anime.stagger(500),
  }
) {
  const hasTriggeredRef = useRef(false);

  const animationOptions = {
    targets: '.text-reveal-' + targetClass,
    autoplay: shouldAutoPlay,
    ...options,
  };

  useEffect(() => {
    const element = ref.current;
    if (!hasTriggeredRef.current) {
      const animation = anime({ ...animationOptions });

      if (shouldAutoPlay) {
        hasTriggeredRef.current = true;
      } else {
        const handleScroll = () => {
          const targetRect = element.getBoundingClientRect();
          const triggerPosition = targetRect.top + window.scrollY - window.innerHeight * 0.5;

          if (window.scrollY >= triggerPosition && !hasTriggeredRef.current) {
            animation.play();

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
