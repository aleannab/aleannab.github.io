import React from 'react';
import { useSpring, animated } from 'react-spring';
import useOnScreen from '../hooks/useOnScreen';

const FadeInOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef();
  const onScreen = useOnScreen(ref);

  React.useEffect(() => {
    if (onScreen && !isVisible) {
      setIsVisible(true);
    }
  }, [onScreen, isVisible]);

  const fadeInAnimation = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div className="flex w-full justify-center items-center" ref={ref} style={fadeInAnimation}>
      {children}
    </animated.div>
  );
};

export default FadeInOnScroll;
