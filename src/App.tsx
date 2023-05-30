import './App.css';
import SvgGenerator from './components/SvgGenerator/SvgGenerator.tsx';
import { StoreProvider } from './store';

function App() {
  return (
    <>
      <StoreProvider>
        <SvgGenerator />
      </StoreProvider>
    </>
  );
}

export default App;
