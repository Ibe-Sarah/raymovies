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
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
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