"use client";

import React, { useState, useEffect } from 'react';

interface TransitionProps {
    children: React.ReactNode
}

const Transition: React.FC<TransitionProps> = ({
    children
}) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
      // Delay the appearance of the content to ensure the fade-in effect
      setTimeout(() => setShow(true), 100);
    }, []);

    const transitionStyles: React.CSSProperties = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        transition: 'opacity 0.5s ease-in-out',
        opacity: show ? 1 : 0,
      };
    
      return <div style={transitionStyles}>{children}</div>;
}

export default Transition;