import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';


function PatientLogin() {
    const navigate = useNavigate();
    const [patient, setPatient] = useState({
        patientEmail: "",
        patientPassword: ""
    });

    const setData = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setPatient((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const PatientLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8888/patientSignIn", patient);
            console.log('response', response);
            return navigate('/patientHome');
        } catch (error) {
            console.log('error', error);
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
                <div className="container">
                    <a className="navbar-brand mx-auto d-lg-none" href="index.html">
                        Medic Care
                        <strong className="d-block">Health Specialist</strong>
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <a className="navbar-brand d-none d-lg-block">
                                Doctor Desk
                                <strong className="d-block">Health Specialist</strong>
                            </a>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <NavLink to="/">Register</NavLink>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="h-100 h-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-xl-6">
                            <div className="card rounded-3">
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                                        Patient Login
                                    </h3>
                                    <form className="px-md-2" >
                                        <div className="form-outline mb-4">
                                            <label style={{ marginRight: 470 }} className="form-label" htmlFor="form3Example1q">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Email Id"
                                                name="patientEmail"
                                                value={patient.patientEmail}
                                                pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                                                onChange={setData}
                                                required
                                            />
                                        </div>




                                        <div className="form-outline mb-4">
                                            <label className="form-label" style={{ marginRight: 470 }} htmlFor="form3Example1q">
                                                Password
                                            </label>
                                            <input
                                                id="password"
                                                type="password"
                                                className="form-control"
                                                placeholder="Enter password"
                                                name="patientPassword"
                                                value={patient.patientPassword}
                                                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}"
                                                // title="Must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long"
                                                onChange={setData}
                                                required
                                            />
                                        </div>

                                        <section className="text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-lg mb-1"
                                                onClick={PatientLogin}
                                            >
                                                Login
                                            </button>
                                        </section>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="site-footer section-padding" id="contact">
                <div className="container">
                    {/* ... Your Footer JSX here ... */}
                </div>
            </footer>
        </div>
    )
}

export default PatientLogin