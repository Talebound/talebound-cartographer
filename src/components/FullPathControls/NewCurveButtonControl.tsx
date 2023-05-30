import React, { useCallback } from 'react';
import { createNewCurveAfterSelected, createNewCurveAtTheEnd } from '../../store/appSlice.ts';
import { useDispatch } from 'react-redux';
import { CurveButton } from './CurveButtonControl.tsx';

interface NewCurveButtonControlProps {
  afterSelected?: boolean;
}

const NewCurveButtonControl: React.FC<NewCurveButtonControlProps> = ({ afterSelected }) => {
  const dispatch = useDispatch();

  const onNewCurveButtonClick = useCallback(() => {
    if (afterSelected) {
      dispatch(createNewCurveAfterSelected());
    } else {
      dispatch(createNewCurveAtTheEnd());
    }
  }, [afterSelected, dispatch]);

  return (
    <CurveButton css={{ backgroundColor: 'lightgreen' }} onClick={onNewCurveButtonClick}>
      +
    </CurveButton>
  );
};

export default NewCurveButtonControl;
