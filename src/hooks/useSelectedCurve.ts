import { useSelector } from 'react-redux';
import { ReduxState } from '../store';
import { CubicCurve } from '../utils/types/types.ts';
import { useSelectedCurveIndex } from './useSelectedCurveIndex.ts';

export function useSelectedCurve(): CubicCurve {
  const selectedCurveIndex = useSelectedCurveIndex();
  return useSelector((state: ReduxState) => state.app.fullPath.curves[selectedCurveIndex]);
}
