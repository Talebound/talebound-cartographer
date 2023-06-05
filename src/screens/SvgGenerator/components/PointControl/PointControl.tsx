import React, { useEffect } from 'react';
import { styled } from '@stitches/react';
import SingleInput from '../CubicCurveControls/SingleInput.tsx';
import { pointTitles, PointType } from '../../../../utils/types/types.ts';
import { useDispatch } from 'react-redux';
import { updateCurvePoint } from '../../../../store/svgGenSlice.ts';
import { useSelectedCurve } from '../../hooks/useSelectedCurve.ts';

const InputsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

const PointControlWrapper = styled('div', {
  display: 'flex',
  padding: '1rem',
  gap: '1rem',
  border: '1px solid black',
  flexDirection: 'column',
});

interface PointControlProps {
  disabled?: boolean;
  pointType: PointType;
}

const PointControl: React.FC<PointControlProps> = ({ disabled, pointType }) => {
  const selectedCurve = useSelectedCurve();
  const dispatch = useDispatch();
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  useEffect(() => {
    setX(selectedCurve[pointType].x);
    setY(selectedCurve[pointType].y);
  }, [selectedCurve]);

  useEffect(() => {
    dispatch(updateCurvePoint({ point: { x, y }, type: pointType }));
  }, [x, y]);

  return (
    <PointControlWrapper>
      {pointTitles[pointType]}
      <InputsWrapper>
        <SingleInput title="X" type="x" inputValue={x} setInputValue={setX} disabled={disabled} />
        <SingleInput title="Y" type="y" inputValue={y} setInputValue={setY} disabled={disabled} />
      </InputsWrapper>
    </PointControlWrapper>
  );
};

export default PointControl;
