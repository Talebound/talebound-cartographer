import React, { useCallback } from 'react';
import {
  createNewCurveAfterSelected,
  createNewCurveAtTheEnd,
} from '../../../../store/svgGenSlice.ts';
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
    <CurveButton
      css={{ width: 'auto', backgroundColor: 'lightgreen' }}
      onClick={onNewCurveButtonClick}
    >
      + New {afterSelected ? 'after selected' : ''}
    </CurveButton>
  );
};

export default NewCurveButtonControl;
