import { CubicCurve, FullPath, Point } from '../types/types.ts';

export const createCubicCurve = (
  startPoint: Point,
  startControlPoint: Point,
  endPoint: Point,
  endControlPoint: Point,
): CubicCurve => {
  return { startPoint, startControlPoint, endPoint, endControlPoint };
};

export const ptt = (p: Point): string => {
  return `${p.x},${p.y}`;
};

export const ctt = (c: CubicCurve): string =>
  `C${ptt(c.startControlPoint)},${ptt(c.endControlPoint)},${ptt(c.endPoint)}`;

export const fptt = (fp: FullPath): string => {
  return `M${ptt(fp.startPoint)}${fp.curves.map((c) => ctt(c))}`;
};

export const reversePoint = (centerPoint: Point, controlPoint: Point): Point => {
  return {
    x: centerPoint.x + (centerPoint.x - controlPoint.x),
    y: centerPoint.y + (centerPoint.y - controlPoint.y),
  };
};
