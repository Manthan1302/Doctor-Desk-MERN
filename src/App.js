import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home.js'
import patientLogin from "./pages/PatientLogin";
import { Route, Routes} from 'react-router-dom';
import PatientHome from './pages/PatientHome';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/patientLogin' Component={patientLogin}/>
        <Route path='/patientHome' Component={PatientHome}/>

      </Routes>
    </>
  );
}

export default App;
