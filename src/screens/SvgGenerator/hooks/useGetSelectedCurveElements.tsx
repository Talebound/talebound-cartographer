import React from 'react';
import { useSelectedCurve } from './useSelectedCurve.ts';
import { useGetCurveElements } from './useGetCurveElements.tsx';

export function useGetSelectedCurveElements(): React.ReactNode {
  const curve = useSelectedCurve();
  return useGetCurveElements(curve);
}
