import { useSelector } from 'react-redux';
import { ReduxState } from '../../../store';

export function useSelectedCurveIndex(): number {
  return useSelector((state: ReduxState) => state.svggen.selectedCurveIndex);
}
