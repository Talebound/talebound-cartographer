/// <reference types="react-scripts" />
/* eslint-disable @typescript-eslint/naming-convention */

import { EqualityFn } from 'react-redux';
import { ReduxDispatch, ReduxState } from './store';

// see https://github.com/reduxjs/react-redux/issues/1879#issuecomment-1104933754
declare module 'react-redux' {
  export declare const useSelector: <T>(
    selector: (state: ReduxState) => T,
    equalityFn?: EqualityFn<T>,
  ) => T;

  export declare const useDispatch: () => ReduxDispatch;
}
