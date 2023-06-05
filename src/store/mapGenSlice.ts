import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MapScreen, MapSetup, TerrainPreset } from '../screens/MapGenerator/utils/mapTypes.ts';

export interface MapGenState {
  mapSetup: MapSetup;
  mapScreen: MapScreen;
  terrainPresets: TerrainPreset[];
  selectedTerrainPreset: TerrainPreset;
  selectedTerrainPresetIndex: number;
}

const initialState: MapGenState = {
  mapSetup: {
    width: 300,
    height: 300,
    seed: Math.random() * 10000,
    noiseDetail: {
      lod: 10,
      falloff: 0.45,
    },
  },
  mapScreen: {
    changed: true,
    xOffset: 10000,
    yOffset: 10000,
    zoomFactor: 200,
    minZoomFactor: 10,
    cameraSpeed: 10,
  },
  terrainPresets: [],
  selectedTerrainPreset: {
    name: 'Default',
    terrains: [],
  },
  selectedTerrainPresetIndex: -1,
};

export const mapGenSlice = createSlice({
  name: 'mapgen',
  initialState,
  reducers: {
    setMapSetup: (state, action: PayloadAction<Partial<MapSetup>>) => {
      Object.assign(state.mapSetup, action.payload);
    },
    setMapScreen: (state, action: PayloadAction<Partial<MapScreen>>) => {
      Object.assign(state.mapScreen, action.payload);
    },
    setTerrainPresets: (state, action: PayloadAction<TerrainPreset[]>) => {
      state.terrainPresets = action.payload;
    },
    setSelectedTerrainPreset: (state, action: PayloadAction<number>) => {
      state.selectedTerrainPresetIndex = action.payload;
      state.selectedTerrainPreset = state.terrainPresets[action.payload];
    },
  },
});

export const { setMapSetup, setMapScreen, setTerrainPresets } = mapGenSlice.actions;

export const mapGenReducer = mapGenSlice.reducer;
