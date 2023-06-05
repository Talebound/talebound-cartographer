import React, { useCallback } from 'react';
import { deleteSelectedCurve } from '../../../../store/svgGenSlice.ts';
import { useDispatch } from 'react-redux';
import { CurveButton } from './CurveButtonControl.tsx';

interface DeleteSelectedCurveButtonControlProps {}

const DeleteSelectedCurveButtonControl: React.FC<DeleteSelectedCurveButtonControlProps> = () => {
  const dispatch = useDispatch();

  const onDeleteSelectedCurveButtonClick = useCallback(() => {
    dispatch(deleteSelectedCurve());
  }, [dispatch]);

  return (
    <CurveButton
      css={{ width: 'auto', backgroundColor: 'red' }}
      onClick={onDeleteSelectedCurveButtonClick}
    >
      Delete selected
    </CurveButton>
  );
};

export default DeleteSelectedCurveButtonControl;
