import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

//<React.StrictMode> removed because it was causing double-render of canvas in p5

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />);
