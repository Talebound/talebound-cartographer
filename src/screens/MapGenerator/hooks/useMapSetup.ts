import { useSelector } from 'react-redux';
import { ReduxState } from '../../../store';
import { MapSetup } from '../utils/mapTypes.ts';

export function useMapSetup(): MapSetup {
  return useSelector((state: ReduxState) => state.mapgen.mapSetup);
}
