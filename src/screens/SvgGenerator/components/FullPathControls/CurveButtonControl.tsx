import React, { useCallback } from 'react';
import { styled } from '@stitches/react';
import { setSelectedCurveIndex } from '../../../../store/appSlice.ts';
import { useDispatch } from 'react-redux';
import { useSelectedCurveIndex } from '../../hooks/useSelectedCurveIndex.ts';

export const CurveButton = styled('button', {
  border: '1px solid black',
  borderRadius: '0.5rem',
  margin: '0.125rem',
  padding: '0.25rem',
  width: '1.75rem',

  variants: {
    selected: {
      true: {
        background: 'black',
        color: 'white',
      },
      false: {},
    },
  },
});

interface CurveButtonControlProps {
  index: number;
}

const CurveButtonControl: React.FC<CurveButtonControlProps> = ({ index }) => {
  const dispatch = useDispatch();
  const selectedCurveIndex = useSelectedCurveIndex();

  const onCurveButtonClick = useCallback(() => {
    dispatch(setSelectedCurveIndex(index));
  }, [dispatch, index]);

  return (
    <CurveButton selected={selectedCurveIndex === index} key={index} onClick={onCurveButtonClick}>
      {index}
    </CurveButton>
  );
};

export default CurveButtonControl;
