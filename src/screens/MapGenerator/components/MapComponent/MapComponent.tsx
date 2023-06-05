import Sketch from 'react-p5';
import type P5 from 'p5';
import { useCallback } from 'react';
import { createTerrainPresets } from '../../utils/createTerrainPresets.ts';
import { getTerrainColor } from '../../utils/terrainUtils.ts';
import { TerrainPreset } from '../../utils/mapTypes.ts';
import { useMapScreen } from '../../hooks/useMapScreen.ts';
import { useDispatch } from 'react-redux';
import { setMapScreen, setTerrainPresets } from '../../../../store/mapGenSlice.ts';
import { useMapSetup } from '../../hooks/useMapSetup.ts';

let terrainPresets: TerrainPreset[];
let selectedTerrainPreset: TerrainPreset;

const MapComponent = () => {
  const dispatch = useDispatch();
  const mapScreen = useMapScreen();
  const mapSetup = useMapSetup();

  const setup = useCallback(
    (p5: P5, canvasParentRef: Element) => {
      p5.createCanvas(mapSetup.width, mapSetup.height).parent(canvasParentRef);
      p5.noiseDetail(mapSetup.noiseDetail.lod, mapSetup.noiseDetail.falloff);
      p5.noiseSeed(mapSetup.seed);
      terrainPresets = createTerrainPresets(p5);
      dispatch(setTerrainPresets(terrainPresets));
      selectedTerrainPreset = terrainPresets[0];
    },
    [
      dispatch,
      mapSetup.height,
      mapSetup.noiseDetail.falloff,
      mapSetup.noiseDetail.lod,
      mapSetup.seed,
      mapSetup.width,
    ],
  );

  const draw = useCallback(
    (p5: P5) => {
      if (p5.keyIsDown(p5.RIGHT_ARROW)) {
        dispatch(
          setMapScreen({
            xOffset: mapScreen.xOffset + (1 / mapScreen.zoomFactor) * mapScreen.cameraSpeed,
            changed: true,
          }),
        );
      }
      if (p5.keyIsDown(p5.LEFT_ARROW)) {
        dispatch(
          setMapScreen({
            xOffset: mapScreen.xOffset - (1 / mapScreen.zoomFactor) * mapScreen.cameraSpeed,
            changed: true,
          }),
        );
      }
      if (p5.keyIsDown(p5.UP_ARROW)) {
        dispatch(
          setMapScreen({
            yOffset: mapScreen.yOffset - (1 / mapScreen.zoomFactor) * mapScreen.cameraSpeed,
            changed: true,
          }),
        );
      }
      if (p5.keyIsDown(p5.DOWN_ARROW)) {
        dispatch(
          setMapScreen({
            yOffset: mapScreen.yOffset + (1 / mapScreen.zoomFactor) * mapScreen.cameraSpeed,
            changed: true,
          }),
        );
      }

      if (!mapScreen.changed) return;

      for (let x = 0; x < p5.width; x++) {
        for (let y = 0; y < p5.height; y++) {
          // Set xVal and yVal for the noise such that the map is centered around
          // the center of the canvas. Adding x and y offset values allows us to
          // move around the noise with the arrow keys.
          const xVal = (x - p5.width / 2) / mapScreen.zoomFactor + mapScreen.xOffset;
          const yVal = (y - p5.height / 2) / mapScreen.zoomFactor + mapScreen.yOffset;
          const noiseValue = p5.noise(xVal, yVal);
          p5.set(x, y, getTerrainColor(noiseValue, selectedTerrainPreset, p5));
        }
      }

      p5.updatePixels();

      dispatch(setMapScreen({ changed: false }));
    },
    [
      dispatch,
      mapScreen.cameraSpeed,
      mapScreen.changed,
      mapScreen.xOffset,
      mapScreen.yOffset,
      mapScreen.zoomFactor,
    ],
  );

  const mouseWheelHandler = useCallback(
    (_: P5, event: UIEvent | undefined) => {
      if (event && 'delta' in event) {
        dispatch(
          setMapScreen({
            zoomFactor: Math.max(
              mapScreen.minZoomFactor,
              mapScreen.zoomFactor - (event.delta as number) / 10,
            ),
            changed: true,
          }),
        );
      }
    },
    [dispatch, mapScreen.minZoomFactor, mapScreen.zoomFactor],
  );

  return <Sketch setup={setup} draw={draw} mouseWheel={mouseWheelHandler} />;
};

export default MapComponent;
