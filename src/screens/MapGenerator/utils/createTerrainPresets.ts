import P5 from 'p5';
import { TerrainPreset } from './mapTypes.ts';
import { createTerrainType } from './TerrainType.ts';

export const createTerrainPresets = (p5: P5): TerrainPreset[] => {
  const baseWorldPreset: TerrainPreset = {
    name: 'Base world',
    terrains: [
      createTerrainType(0.2, 0.4, p5.color(30, 176, 251), p5.color(40, 255, 255)),
      createTerrainType(0.4, 0.5, p5.color(215, 192, 158), p5.color(255, 246, 193), 0.3),
      createTerrainType(0.5, 0.7, p5.color(2, 166, 155), p5.color(118, 239, 124)),
      createTerrainType(0.7, 0.75, p5.color(22, 181, 141), p5.color(10, 145, 113), -0.5),
    ],
  };

  return [baseWorldPreset];
};
