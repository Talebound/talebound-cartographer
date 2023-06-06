import React from 'react';
import MapComponent from './components/MapComponent/MapComponent.tsx';
import { styled } from '@stitches/react';
import ControllerSectionColumn from './components/ControllerSection/ControllerSectionColumn.tsx';
import MapGeneratorControls from './components/MapGeneratorControls/MapGeneratorControls.tsx';

const MapWrapper = styled('div', {
  width: '904px',
  height: '604px',
  border: '2px solid black',
});

const RowWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
});

const MapGenerator: React.FC = () => {
  return (
    <RowWrapper>
      <MapWrapper>
        <MapComponent />
      </MapWrapper>
      <ControllerSectionColumn>
        <MapGeneratorControls />
      </ControllerSectionColumn>
    </RowWrapper>
  );
};

export default MapGenerator;
