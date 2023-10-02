function doctorPatient(){
    return( 
        <div>


<main>

            <nav className="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
                <div className="container">
                    <a className="navbar-brand mx-auto d-lg-none" href="index.html">
                       Doctor Desk
                        <strong className="d-block">Health Specialist</strong>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                        
                            
                            <a className="navbar-brand d-none d-lg-block" href="/home">
                                Doctor Desk
                                <strong className="d-block">Health Specialist</strong>
                            </a>
                            <li className="nav-item ">
                                <a className="nav-link" href="/doctorAppointments">Pending Appointments</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/doctorConfirmAppointments">Confirm Appointments</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/doctorPatient">Patients</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/doctorLogout">Logout</a>
                            </li>

                           
                        </ul>
                    </div>

                </div>
            </nav>


            <section style={{padding:"15px"}}>
                <table className="table">
                    <thead className="table-success">
                      <tr>
                        <th>Patient Name</th>
                        <th>Contact Number</th>
                        <th>Email id</th>
                        <th>Gender</th>
                        <th>Age</th>
                      </tr>
                    </thead>
                    <tbody>
    
                      <tr>
                        <td>Arjun</td>
                        <td>djf</td>
                        <td>gdfgdf</td>
                        <td>gdfg</td>
                        <td>gfd</td>
                      </tr>
                    </tbody>
                </table>
            </section>
            
        </main>
        </div>
    )
}

export default doctorPatient;