import React from 'react';
import { styled } from '@stitches/react';
import PointControl from '../PointControl/PointControl.tsx';
import FullPathControls from '../FullPathControls/FullPathControls.tsx';

const CubicCurveControlsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  border: '1px solid black',
});

const CubicCurveControls: React.FC = () => {
  return (
    <CubicCurveControlsWrapper>
      <FullPathControls />
      <PointControl pointType="startPoint" disabled={true} />
      <PointControl pointType="startControlPoint" />
      <PointControl pointType="endPoint" />
      <PointControl pointType="endControlPoint" />
    </CubicCurveControlsWrapper>
  );
};

export default CubicCurveControls;
