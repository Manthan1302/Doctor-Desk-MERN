import React from 'react'

import PatientNavbar from './PatientNavbar'
import '../css/patientProfile.css'

function PatientProfile(){
    return (
        <div>
            <PatientNavbar></PatientNavbar>
            <div className="container-xl px-4 mt-4">
              <div className="row">
                  <div className="col-xl-4">
                      <div className="card mb-4 mb-xl-0">
                          <div className="card-header">My Profile</div>
                          <div className="card-body text-center">
                              <img className="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
                              <p className="card-text"><b>Name:</b> Arjun</p>
                              <p className="card-text"><b>Email:</b> A@gmail.com</p>
                              <p className="card-text"><b>Phonenumber:</b> 7201914901</p>
                              <p className="card-text"><b>Age:</b> 22</p>
                              <a className="btn btn-primary" href="/patientLogout">Logout</a>

                          </div>
                      </div>
                  </div>
                  <div className="col-xl-8">
                      <div className="card mb-4">
                          <div className="card-header">Edit Profile</div>
                          <div className="card-body">
                              <form className="px-md-2" action="" method="post">
                                  <div className="row gx-3 mb-3">
                                      <div className="col-md-6">
                                          <label className="small mb-1" for="inputFirstName">Name</label>
                                          <input className="form-control"  type="text" name = "uname"/>
                                      </div>
                                      <div className="col-md-6">
                                          <label className="small mb-1" for="inputLastName">Age</label>
                                          <input className="form-control" id="inputLastName" type="text" name = "uage" placeholder="Enter your last name" />
                                      </div>
                                  </div>

                                  <div className="row gx-3 mb-3">
                            
                                 
                                  </div>
                                  <div className="mb-3">
                                      <label className="small mb-1" for="inputEmailAddress">Email address</label>
                                      <input className="form-control" id="inputEmailAddress" name = "uemail" type="email" placeholder="Enter your email address"/>
                                  </div>
                                  <div className="row gx-3 mb-3">
                                      <div className="col-md-6">
                                          <label className="small mb-1" for="inputPhone">Phone number</label>
                                          <input className="form-control" id="inputPhone" type="tel" name = "uphone" placeholder="Enter your phone number" />
                                      </div>
                                    
                                  </div>
                                  <button className="btn btn-primary" type="submit">Save changes</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  

        </div>
    
    )
        
}

export default PatientProfile;