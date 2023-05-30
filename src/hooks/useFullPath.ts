import { useSelector } from 'react-redux';
import { ReduxState } from '../store';
import { FullPath } from '../utils/types/types.ts';

export function useFullPath(): FullPath {
  return useSelector((state: ReduxState) => state.app.fullPath);
}
