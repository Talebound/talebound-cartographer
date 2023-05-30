import React from 'react';
import { styled } from '@stitches/react';
import { useFullPathCurves } from '../../hooks/useFullPathCurves.ts';
import CurveButtonControl from './CurveButtonControl.tsx';
import NewCurveButtonControl from './NewCurveButtonControl.tsx';
import DeleteSelectedCurveButtonControl from './DeleteSelectedCurveButtonControl.tsx';

const ButtonsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.125rem',
});

const FullPathControlsWrapper = styled(ButtonsWrapper, {
  justifyContent: 'space-between',
  border: '1px solid black',
});

const FullPathControls: React.FC = () => {
  const allCurves = useFullPathCurves();

  return (
    <FullPathControlsWrapper>
      <ButtonsWrapper>
        {allCurves.map((_, index) => (
          <CurveButtonControl key={index} index={index} />
        ))}
        <NewCurveButtonControl />
        <NewCurveButtonControl afterSelected={true} />
      </ButtonsWrapper>
      <ButtonsWrapper>
        <DeleteSelectedCurveButtonControl />
      </ButtonsWrapper>
    </FullPathControlsWrapper>
  );
};

export default FullPathControls;
