import { useSelector } from 'react-redux';
import { ReduxState } from '../../../store';
import { CubicCurve } from '../../../utils/types/types.ts';

export function useFullPathCurves(): CubicCurve[] {
  return useSelector((state: ReduxState) => state.svggen.fullPath.curves);
}
