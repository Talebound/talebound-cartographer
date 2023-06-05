import { TerrainType } from './TerrainType.ts';

export type MapNoiseDetail = {
  lod: number;
  falloff: number;
};

export type MapSetup = {
  width: number;
  height: number;
  seed: number;
  noiseDetail: MapNoiseDetail;
};

export type MapScreen = {
  changed: boolean;
  xOffset: number;
  yOffset: number;
  zoomFactor: number;
  minZoomFactor: number;
  cameraSpeed: number;
};

export type TerrainPreset = {
  name: string;
  terrains: TerrainType[];
};
