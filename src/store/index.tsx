import React, { ReactNode } from 'react';
import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { svgGenReducer, svgGenSlice } from './svgGenSlice.ts';
import { mapGenReducer, mapGenSlice } from './mapGenSlice.ts';

export const store = configureStore({
  reducer: {
    [svgGenSlice.name]: svgGenReducer,
    [mapGenSlice.name]: mapGenReducer,
  },
});

export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
export type StoreAction<R> = ThunkAction<Promise<R>, ReduxState, unknown, AnyAction>;

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
