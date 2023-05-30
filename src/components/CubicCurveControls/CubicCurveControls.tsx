import React, { useEffect } from 'react';
import { styled } from '@stitches/react';
import PointControl from '../PointControl/PointControl.tsx';
import { Point } from '../../utils/types/types.ts';

const CubicCurveControlsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  border: '1px solid black',
});

const CubicCurveControls: React.FC = () => {
  const [startPoint, setStartPoint] = React.useState<Point>({ x: 0, y: 0 });
  const [startControlPoint, setStartControlPoint] = React.useState<Point>({ x: 0, y: 0 });
  const [endPoint, setEndPoint] = React.useState<Point>({ x: 0, y: 0 });
  const [endControlPoint, setEndControlPoint] = React.useState<Point>({ x: 0, y: 0 });

  useEffect(() => {
    console.log(startPoint, startControlPoint, endPoint, endControlPoint);
  }, [startPoint, startControlPoint, endPoint, endControlPoint]);

  return (
    <CubicCurveControlsWrapper>
      <PointControl setPoint={setStartPoint} title="Start point" disabled={true} />
      <PointControl setPoint={setStartControlPoint} title="Start control point" />
      <PointControl setPoint={setEndPoint} title="End point" />
      <PointControl setPoint={setEndControlPoint} title="End control point" />
    </CubicCurveControlsWrapper>
  );
};

export default CubicCurveControls;
