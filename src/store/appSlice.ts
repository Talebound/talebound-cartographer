import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullPath, Point, PointType } from '../utils/types/types.ts';
import { reversePoint } from '../utils/functions/pointFunctions.ts';

export interface AppState {
  fullPath: FullPath;
  selectedCurveIndex: number;
}

const basePoint: Point = {
  x: 0,
  y: 0,
};

const baseCurve = {
  startPoint: { ...basePoint },
  startControlPoint: { ...basePoint },
  endPoint: { ...basePoint },
  endControlPoint: { ...basePoint },
};

const initialState: AppState = {
  fullPath: {
    startPoint: { ...basePoint },
    curves: [{ ...baseCurve }],
  },
  selectedCurveIndex: 0,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPathStartPoint: (state, action: PayloadAction<Point>) => {
      state.fullPath.startPoint = action.payload;
      const firstCurve = state.fullPath.curves[0];
      if (firstCurve) {
        firstCurve.startPoint = action.payload;
      }
    },
    setSelectedCurveIndex: (state, action: PayloadAction<number>) => {
      state.selectedCurveIndex = action.payload;
    },
    deleteSelectedCurve: (state) => {
      if (state.fullPath.curves.length > 1) {
        state.fullPath.curves.splice(state.selectedCurveIndex, 1);
        state.selectedCurveIndex = 0;
      }
    },
    createNewCurveAtTheEnd: (state) => {
      const lastPoint = state.fullPath.curves[state.fullPath.curves.length - 1].endPoint;
      const lastControlPoint =
        state.fullPath.curves[state.fullPath.curves.length - 1].endControlPoint;

      state.fullPath.curves.push({
        startPoint: { ...lastPoint },
        startControlPoint: reversePoint(lastPoint, lastControlPoint),
        endPoint: { ...lastPoint },
        endControlPoint: reversePoint(lastPoint, lastControlPoint),
      });
      state.selectedCurveIndex = state.fullPath.curves.length - 1;
    },
    createNewCurveAfterSelected: (state) => {
      state.fullPath.curves.splice(state.selectedCurveIndex + 1, 0, {
        startPoint: { ...state.fullPath.curves[state.selectedCurveIndex].endPoint },
        startControlPoint: {
          ...state.fullPath.curves[state.selectedCurveIndex].endControlPoint,
        },
        endPoint: { ...state.fullPath.curves[state.selectedCurveIndex].endPoint },
        endControlPoint: {
          ...state.fullPath.curves[state.selectedCurveIndex].endControlPoint,
        },
      });
      state.selectedCurveIndex += 1;
    },
    updateCurvePoint: (state, action: PayloadAction<{ point: Point; type: PointType }>) => {
      state.fullPath.curves[state.selectedCurveIndex][action.payload.type] = action.payload.point;
      if (action.payload.type === 'endPoint') {
        const nextCurve = state.fullPath.curves[state.selectedCurveIndex + 1];
        if (nextCurve) {
          nextCurve.startPoint = action.payload.point;
        }
      }
    },
  },
});

export const {
  setPathStartPoint,
  createNewCurveAfterSelected,
  deleteSelectedCurve,
  setSelectedCurveIndex,
  createNewCurveAtTheEnd,
  updateCurvePoint,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
