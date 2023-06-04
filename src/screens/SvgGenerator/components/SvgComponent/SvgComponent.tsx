import React from 'react';
import { useGetSelectedCurveElements } from '../../hooks/useGetSelectedCurveElements.tsx';

const SvgComponent: React.FC = () => {
  const curveElements = useGetSelectedCurveElements();

  return (
    <svg
      style={{ border: '2px solid black' }}
      viewBox="0 0 1200 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="rgba(139.595, 101.581, 83.59, 1)" offset="0%"></stop>
          <stop id="stop2" stopColor="rgba(255, 158.795, 0, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      {curveElements}
    </svg>
  );
};

export default SvgComponent;
