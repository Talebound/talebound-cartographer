import React from 'react';
import MapComponent from './components/MapComponent/MapComponent.tsx';
import { styled } from '@stitches/react';
import ControllerSectionColumn from './components/ControllerSection/ControllerSectionColumn.tsx';

const MapWrapper = styled('div', {
  width: '1200px',
  height: '800px',
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
      <ControllerSectionColumn>test</ControllerSectionColumn>
    </RowWrapper>
  );
};

export default MapGenerator;
