import { HashRouter } from 'react-router-dom';
import './App.css';
import IndexRouter from './router';

function App() {
  return (
    <HashRouter>
      <IndexRouter />
    </HashRouter>
  )
}

export default App;
