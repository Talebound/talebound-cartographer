import React, { useMemo } from 'react';
import { CubicCurve } from '../utils/types/types.ts';
import { ctt, fptt, ptt } from '../utils/functions/pointFunctions.ts';
import { useFullPath } from './useFullPath.ts';

export function useGetCurveElements(curve: CubicCurve): React.ReactNode {
  const fullPath = useFullPath();
  return useMemo(
    () => (
      <>
        <path
          fill="url(#sw-gradient)"
          stroke="url(#sw-gradient)"
          strokeWidth={2}
          d={`${fptt(fullPath)}`}
        />
        <circle cx={curve.startPoint.x} cy={curve.startPoint.y} r="10" fill="red" />
        <circle cx={curve.startControlPoint.x} cy={curve.startControlPoint.y} r="10" fill="red" />
        <circle cx={curve.endPoint.x} cy={curve.endPoint.y} r="10" fill="red" />
        <circle cx={curve.endControlPoint.x} cy={curve.endControlPoint.y} r="10" fill="red" />
        <path
          stroke="red"
          strokeWidth={1}
          d={`M${ptt(curve.startControlPoint)}L${ptt(curve.startPoint)}`}
        />
        <path
          stroke="red"
          strokeWidth={1}
          d={`M${ptt(curve.endControlPoint)}L${ptt(curve.endPoint)}`}
        />
        <path
          stroke="red"
          strokeWidth={5}
          fill="transparent"
          d={`M${ptt(curve.startPoint)}${ctt(curve)}`}
        />
      </>
    ),
    [
      curve.startControlPoint.y,
      curve.endPoint.y,
      curve.endControlPoint.y,
      curve.startControlPoint,
      curve.startPoint,
      curve.endControlPoint,
      curve.endPoint,
      curve,
      fullPath,
    ],
  );
}
