function PatientNavbar(){
    return (
       
        <div>

<nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
                <div className="container">
                    <a class="navbar-brand mx-auto d-lg-none" href="index.html">
                        Medic Care
                        <strong className="d-block">Health Specialist</strong>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            
                            {/* {% comment %} <label class="form-label" for="form3Example1q">Welcome {{request.session.loginname}}</label> {% endcomment %} */}
                            <a className="navbar-brand d-none d-lg-block" href="/Patienthome">
                                Doctor Desk
                                 <strong className="d-block">Health Specialist</strong>
                             </a>


                          
                            <li className="nav-item">
                                <a className="nav-link" href="/patientAppointment">Appointment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Patienthome#contact">Contact</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/Patienthome#about" >About</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/patientProfile" >Profile</a>
                            </li>
                        
                            <li className="nav-item">
                                <a className="nav-link" href="/patientLogout" >Logout</a>
                            </li>
                            
                        </ul>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default PatientNavbar;