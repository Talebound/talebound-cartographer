import React from 'react';
import { styled } from '@stitches/react';
import CubicCurveControls from '../CubicCurveControls/CubicCurveControls.tsx';
import SvgComponent from './SvgComponent.tsx';
import FullPathControls from '../FullPathControls/FullPathControls.tsx';

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
    <div>
      <h1>SVG Generator</h1>
      <RowWrapper>
        <SvgWrapper>
          <SvgComponent />
        </SvgWrapper>
        <CubicCurveControls />
      </RowWrapper>
    </div>
  );
};

export default SvgGenerator;
