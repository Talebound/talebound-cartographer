import Sketch from 'react-p5';
import type P5 from 'p5';
import { useCallback } from 'react';

class TerrainType {
  private readonly _minHeight: number;
  private readonly _maxHeight: number;
  private readonly _minColor: P5.Color;
  private readonly _maxColor: P5.Color;
  private readonly _lerpAdjustment: number;

  constructor(
    minHeight: number,
    maxHeight: number,
    minColor: P5.Color,
    maxColor: P5.Color,
    lerpAdjustment = 0,
  ) {
    this._minHeight = minHeight;
    this._maxHeight = maxHeight;
    this._minColor = minColor;
    this._maxColor = maxColor;
    // An adjustment to the color lerp for the map type, this weighs the color
    // towards the min or max color.
    this._lerpAdjustment = lerpAdjustment;
  }

  get minHeight(): number {
    return this._minHeight;
  }

  get maxHeight(): number {
    return this._maxHeight;
  }

  get minColor(): P5.Color {
    return this._minColor;
  }

  get maxColor(): P5.Color {
    return this._maxColor;
  }

  get lerpAdjustment(): number {
    return this._lerpAdjustment;
  }
}

function getTerrainColor(noiseValue: number, mapType: TerrainType, p5: P5): P5.Color {
  // Given a noise value, normalize to to be between 0 to 1 representing how
  // close it is to the min or max height for the given terrain type.
  const normalized = normalize(noiseValue, mapType.maxHeight, mapType.minHeight);
  // Blend between the min and max height colors based on the normalized
  // noise value.
  return p5.lerpColor(mapType.minColor, mapType.maxColor, normalized + mapType.lerpAdjustment);
}

// Return a number between 0 and 1 between max and min based on value.
function normalize(value: number, max: number, min: number) {
  if (value > max) {
    return 1;
  }
  if (value < min) {
    return 0;
  }
  return (value - min) / (max - min);
}

let waterTerrain: TerrainType;
let sandTerrain: TerrainType;
let grassTerrain: TerrainType;
let treesTerrain: TerrainType;

let zoomFactor = 200;
let mapChanged = true;
// The x and y offset need to be large because Perlin noise mirrors around 0.
let xOffset = 10000;
let yOffset = 10000;
const cameraSpeed = 10;

const MapComponent = () => {
  const setup = useCallback((p5: P5, canvasParentRef: Element) => {
    p5.createCanvas(1200, 800).parent(canvasParentRef);
    p5.noiseDetail(10, 0.45);
    waterTerrain = new TerrainType(0.2, 0.4, p5.color(30, 176, 251), p5.color(40, 255, 255));
    sandTerrain = new TerrainType(0.4, 0.5, p5.color(215, 192, 158), p5.color(255, 246, 193), 0.3);
    grassTerrain = new TerrainType(0.5, 0.7, p5.color(2, 166, 155), p5.color(118, 239, 124));
    treesTerrain = new TerrainType(0.7, 0.75, p5.color(22, 181, 141), p5.color(10, 145, 113), -0.5);
  }, []);

  const draw = useCallback((p5: P5) => {
    if (!mapChanged) {
      return;
    }
    console.log(p5);
    console.log(p5.width, p5.height);

    for (let x = 0; x < p5.width; x++) {
      for (let y = 0; y < p5.height; y++) {
        // Set xVal and yVal for the noise such that the map is centered around
        // the center of the canvas. Adding x and y offset values allows us to
        // move around the noise with the arrow keys.
        const xVal = (x - p5.width / 2) / zoomFactor + xOffset;
        const yVal = (y - p5.height / 2) / zoomFactor + yOffset;
        const noiseValue = p5.noise(xVal, yVal);

        let terrainColor;
        if (noiseValue < waterTerrain.maxHeight) {
          terrainColor = getTerrainColor(noiseValue, waterTerrain, p5);
        } else if (noiseValue < sandTerrain.maxHeight) {
          terrainColor = getTerrainColor(noiseValue, sandTerrain, p5);
        } else if (noiseValue < grassTerrain.maxHeight) {
          terrainColor = getTerrainColor(noiseValue, grassTerrain, p5);
        } else {
          terrainColor = getTerrainColor(noiseValue, treesTerrain, p5);
        }
        p5.set(x, y, terrainColor);
      }
    }

    p5.updatePixels();

    mapChanged = false;
  }, []);

  return <Sketch setup={setup} draw={draw} />;
};

export default MapComponent;
