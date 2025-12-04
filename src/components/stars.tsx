"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Stars = () => {
  const { theme } = useTheme();
  const [stars, setStars] = useState<React.JSX.Element[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (theme === 'dark' && isClient) {
      const generateStars = () => {
        const newStars = Array.from({ length: 100 }).map((_, i) => {
          const style: React.CSSProperties = {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 0.5}px`,
            height: `${Math.random() * 2 + 0.5}px`,
            animationDuration: `${Math.random() * 5 + 3}s`,
            animationDelay: `${Math.random() * 3}s`,
          };
          return <div key={i} className="star" style={style} />;
        });
        setStars(newStars);
      };
      generateStars();
    }
  }, [theme, isClient]);

  if (theme !== 'dark' || !isClient) {
    return null;
  }

  return <div className="stars">{stars}</div>;
};

export default Stars;
