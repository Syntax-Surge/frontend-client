import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from './contexts/Context';
import Home from './pages/Home';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
