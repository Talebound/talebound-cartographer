import React, { useEffect } from 'react';
import { styled } from '@stitches/react';
import SingleInput from '../CubicCurveControls/SingleInput.tsx';
import { Point } from '../../utils/types/types.ts';

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
  title?: string;
  disabled?: boolean;
  setPoint: React.Dispatch<React.SetStateAction<Point>>;
}

const PointControl: React.FC<PointControlProps> = ({ title, disabled, setPoint }) => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  useEffect(() => {
    setPoint({ x, y });
  }, [x, y]);

  return (
    <PointControlWrapper>
      {title}
      <InputsWrapper>
        <SingleInput title="X" type="x" inputValue={x} setInputValue={setX} disabled={disabled} />
        <SingleInput title="Y" type="y" inputValue={y} setInputValue={setY} disabled={disabled} />
      </InputsWrapper>
    </PointControlWrapper>
  );
};

export default PointControl;
