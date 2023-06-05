import P5 from 'p5';

export const ColorMap: Map<string, P5.Color> = new Map<string, P5.Color>();

export interface TerrainType {
  minHeight: number;
  maxHeight: number;
  minColorKey: string;
  maxColorKey: string;
  lerpAdjustment: number;
}

export const createTerrainType = (
  minHeight: number,
  maxHeight: number,
  minColor: P5.Color,
  maxColor: P5.Color,
  lerpAdjustment = 0,
): TerrainType => {
  ColorMap.set(minColor.toString(), minColor);
  ColorMap.set(maxColor.toString(), maxColor);

  return {
    minHeight,
    maxHeight,
    minColorKey: minColor.toString(),
    maxColorKey: maxColor.toString(),
    lerpAdjustment,
  };
};
