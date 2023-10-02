import React from 'react';
import logo from './logo.svg';
import './App.css';
import PatientRegister from './pages/PatientRegister'
import patientLogin from "./pages/PatientLogin";
import { Route, Routes} from 'react-router-dom';
import PatientHome from './pages/PatientHome';
import PatientProfile from './pages/PatientProfile';
import PatientAppointmentBook from './pages/PatientAppointmentBook';
import DoctorRegister from './pages/doctor_pages/DoctorRegister';
import DoctorLogin from './pages/doctor_pages/DoctorLogin';
import DoctorHome from './pages/doctor_pages/DoctorHome';
import doctorPatient from './pages/doctor_pages/DoctorPatient';
import doctorAppointments from './pages/doctor_pages/DoctorAppointments';
import DoctorConfirmAppointments from './pages/doctor_pages/DoctorConfirmAppointments';
import AdminDashboard from './pages/admin_pages/AdminDashboard';


function App() {
  return (
    <>
      <Routes>
        <Route path='/patientRegister' Component={PatientRegister}/>
        <Route path='/' Component={patientLogin}/>
        <Route path='/patientHome' Component={PatientHome}/>
        <Route path='/patientProfile' Component={PatientProfile}/>
        <Route path='/patientAppointment' Component={PatientAppointmentBook}/>
        <Route path='/doctorRegister' Component={DoctorRegister}/>
        <Route path='/doctorLogin' Component={DoctorLogin}/>
        <Route path='/doctorHome' Component={DoctorHome}/>
        <Route path='/doctorPatient' Component={doctorPatient}/>
        <Route path='/doctorAppointments' Component={doctorAppointments}/>
        <Route path='/doctorConfirmAppointments' Component={DoctorConfirmAppointments}/>
        <Route path='/adminDashboard' Component={AdminDashboard}/>
      </Routes>
    </>
  );
}

export default App;
