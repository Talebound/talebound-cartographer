import './App.css';
import { StoreProvider } from './store';
import { router } from './routes/router.tsx';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </>
  );
}

export default App;
