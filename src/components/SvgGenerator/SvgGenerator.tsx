import React from 'react';
import { styled } from '@stitches/react';
import CubicCurveControls from '../CubicCurveControls/CubicCurveControls.tsx';

const SvgWrapper = styled('div', {
  width: '450px',
  height: '300px',
});

const RowWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
});

const SvgGenerator: React.FC = () => {
  return (
    <div>
      <h1>SVG Generator</h1>
      <RowWrapper>
        <SvgWrapper>
          <svg id="my-svg" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stopColor="rgba(139.595, 101.581, 83.59, 1)" offset="0%"></stop>
                <stop id="stop2" stopColor="rgba(255, 158.795, 0, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <circle cx="154" cy="0" r="2" fill="red" />
            <path
              fill="url(#sw-gradient)"
              d="M154,0 C200,20,500,300,500,200 H1200V0Z"
              strokeWidth="0"
              stroke="url(#sw-gradient)"
            ></path>
          </svg>
        </SvgWrapper>
        <CubicCurveControls />
      </RowWrapper>
    </div>
  );
};

export default SvgGenerator;
