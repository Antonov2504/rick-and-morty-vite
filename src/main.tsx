import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles';

import { NavApp } from './components/NavApp';

const App = () => {
  return <NavApp />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
