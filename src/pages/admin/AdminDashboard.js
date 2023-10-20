import '../../css/admindashboard.css'
function AdminDashboard() {
    return (
        <div className="master">
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
                            <a className="navbar-brand d-none d-lg-block" style={{ marginRight: "1100px" }} href="/Patienthome">
                                Doctor Desk
                                <strong className="d-block">Health Specialist</strong>
                            </a>


                            <li className="nav-item">
                                <a className="nav-link" href="/adminLogout" >Logout</a>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>


            <div className="box"><div className="text1">Doctor</div></div>
            <div className="box"><div className="text1">Patient</div></div>
        </div>
    )
}

export default AdminDashboard;