import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from './contexts/Context';
import Home from './pages/Home'; 
import SignUp from './pages/auth pages/signUp';
import SignIn from './pages/auth pages/signIn';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>} />
          </Route>
         
         
          <Route>
            <Route path="/auth/signup" element={<SignUp/>} />
            <Route path="/auth/signIn" element={<SignIn/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
