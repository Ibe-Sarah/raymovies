import logo from './logo.svg';
import { Button } from 'flowbite-react';

import './App.css';
import {
  HashRouter,
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
     <HashRouter>
        <Routes>
        <Route path="/" element={<LoginPage/>} />
            <Route path="/raymovies" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/state" element={<State/>} />
        </Routes>
      </HashRouter>
    </div>
  </div>
  );
}


// used hashrouter instead of browserrouter to enable client-side routing to other pages other the homepage cos gh-pages doesn't support SPAs so there is a 404 page when refreshing page

export default App;