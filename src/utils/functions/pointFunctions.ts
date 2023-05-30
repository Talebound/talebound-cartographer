import { CubicCurve, Point } from '../types/types.ts';

export const createCubicCurve = (
  startPoint: Point,
  startControlPoint: Point,
  endPoint: Point,
  endControlPoint: Point,
): CubicCurve => {
  return { startPoint, startControlPoint, endPoint, endControlPoint };
};
