import logo from './logo.svg';
import { Button } from 'flowbite-react';

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import State from './components/state';

function App() {
  return (
    <div className="">
    <div className="">
     <BrowserRouter>
        <Routes>
            <Route path="/raymovies" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/state" element={<State/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;