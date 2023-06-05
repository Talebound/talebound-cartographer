import { useSelector } from 'react-redux';
import { ReduxState } from '../../../store';
import { MapScreen } from '../utils/mapTypes.ts';

export function useMapScreen(): MapScreen {
  return useSelector((state: ReduxState) => state.mapgen.mapScreen);
}
