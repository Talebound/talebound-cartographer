import P5 from 'p5';
import { TerrainPreset } from './mapTypes.ts';
import { ColorMap } from './TerrainType.ts';

export function getTerrainColor(
  noiseValue: number,
  terrainPreset: TerrainPreset,
  p5: P5,
): P5.Color {
  const terrain = terrainPreset.terrains.find((terrain) => {
    return noiseValue < terrain.maxHeight;
  });

  if (terrain) {
    const minColor = ColorMap.get(terrain.minColorKey);
    const maxColor = ColorMap.get(terrain.maxColorKey);
    if (minColor && maxColor) {
      const normalized = normalize(noiseValue, terrain.maxHeight, terrain.minHeight);
      return p5.lerpColor(minColor, maxColor, normalized + terrain.lerpAdjustment);
    }
  }
  return p5.color(0);
}

function normalize(value: number, max: number, min: number) {
  if (value > max) return 1;
  if (value < min) return 0;
  return (value - min) / (max - min);
}
