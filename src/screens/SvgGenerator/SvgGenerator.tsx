import React from 'react';
import { styled } from '@stitches/react';
import CubicCurveControls from './components/CubicCurveControls/CubicCurveControls.tsx';
import SvgComponent from './components/SvgComponent/SvgComponent.tsx';

const SvgWrapper = styled('div', {
  width: '900px',
  height: '600px',
});

const RowWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
});

const SvgGenerator: React.FC = () => {
  return (
    <RowWrapper>
      <SvgWrapper>
        <SvgComponent />
      </SvgWrapper>
      <CubicCurveControls />
    </RowWrapper>
  );
};

export default SvgGenerator;
