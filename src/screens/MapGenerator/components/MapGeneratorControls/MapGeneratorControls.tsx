import React, { useCallback } from 'react';
import SliderInput from '../SliderInput/SliderInput.tsx';
import { useDispatch } from 'react-redux';
import { setMapScreen } from '../../../../store/mapGenSlice.ts';
import { useMapScreen } from '../../hooks/useMapScreen.ts';
import { Col } from 'antd';

interface MapGeneratorControlsProps {}

/*

  title: string;
  disabled?: boolean;
  inputValue: number;
  minValue?: number;
  maxValue?: number;
  setInputValue: React.Dispatch<React.SetStateAction<number>>;
 */

const MapGeneratorControls: React.FC<MapGeneratorControlsProps> = () => {
  const dispatch = useDispatch();
  const mapScreen = useMapScreen();

  const zoomFactorHandler = useCallback(
    (value: number) => {
      dispatch(setMapScreen({ zoomFactor: value, changed: true }));
    },
    [dispatch],
  );

  const xOffsetHandler = useCallback(
    (value: number) => {
      dispatch(setMapScreen({ xOffset: value, changed: true }));
    },
    [dispatch],
  );

  const yOffsetHandler = useCallback(
    (value: number) => {
      dispatch(setMapScreen({ yOffset: value, changed: true }));
    },
    [dispatch],
  );

  return (
    <Col>
      <SliderInput
        title="Zoom factor"
        inputValue={mapScreen.zoomFactor}
        setInputValue={zoomFactorHandler}
        minValue={10}
        maxValue={250}
      />
      <SliderInput
        title="X offset"
        inputValue={mapScreen.xOffset}
        setInputValue={xOffsetHandler}
        minValue={0}
        maxValue={1800}
      />
      <SliderInput
        title="Y offset"
        inputValue={mapScreen.yOffset}
        setInputValue={yOffsetHandler}
        minValue={0}
        maxValue={1200}
      />
    </Col>
  );
};

export default MapGeneratorControls;
