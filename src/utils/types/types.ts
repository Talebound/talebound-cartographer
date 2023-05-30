export interface Point {
  x: number;
  y: number;
}

export interface CubicCurve {
  startPoint: Point;
  startControlPoint: Point;
  endPoint: Point;
  endControlPoint: Point;
}

export interface FullPath {
  startPoint: Point;
  curves: CubicCurve[];
}

export type PointType = keyof CubicCurve;

export const pointTitles: Record<PointType, string> = {
  startPoint: 'Start Point',
  startControlPoint: 'Start Control Point',
  endPoint: 'End Point',
  endControlPoint: 'End Control Point',
};
