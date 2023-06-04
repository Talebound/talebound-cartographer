import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import PageLayout from './PageLayout.tsx';
import SvgGenerator from '../screens/SvgGenerator/SvgGenerator.tsx';
import MapGenerator from '../screens/MapGenerator/MapGenerator.tsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route path="svg-generator" element={<SvgGenerator />} />
      <Route path="map-generator" element={<MapGenerator />} />
      <Route path="/" element={<MapGenerator />} />
    </Route>,
  ),
);
