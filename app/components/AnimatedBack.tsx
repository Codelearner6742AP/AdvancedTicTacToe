// app/components/AnimatedBack.tsx
import React from 'react';
import '../globals.scss';

const AnimatedBackground: React.FC = () => {
  return (
      <div className="background-animation">
        {Array.from({ length: 20 }).map((_, index) => (
            <div key={`line-${index}`} className="line" />
        ))}
        <div className="connector" />
      </div>
  );
};

export default AnimatedBackground;
