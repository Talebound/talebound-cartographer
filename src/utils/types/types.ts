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
