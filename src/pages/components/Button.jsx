import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Button = ({ children, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);
  const animation = useSpring({
    transform: isPressed
      ? 'scale(0.95) translateY(2px)'
      : 'scale(1) translateY(0)',
    boxShadow: isPressed
      ? '0 2px 2px rgba(0, 0, 0, 0.1)'
      : '0 6px 6px rgba(0, 0, 0, 0.1)'
  });

  return (
    <animated.button
      style={animation}
      className="px-5 py-3 text-white rounded-lg bg-blue hover:bg-gray"
      onClick={() => {
        setIsPressed(true);
        setTimeout(() => setIsPressed(false), 200);
        onClick();
      }}
    >
      {children}
    </animated.button>
  );
};

export default Button;