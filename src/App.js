import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from './contexts/Context';
import Home from './pages/Home'; 
import SignUp from './pages/auth pages/signUp';
import SignIn from './pages/auth pages/signIn'; 
import ChangePassword from './pages/auth pages/chnagePassword';
import ForgotPassword from './pages/auth pages/forgotPassword';

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
            <Route path="/auth/user/reset/:id" element={<ChangePassword/>} />
            <Route path="/auth/user/forgot-password" element={<ForgotPassword/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
