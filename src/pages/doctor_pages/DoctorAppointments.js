function doctorAppointments(){
    return( 
        <div>




<main>

<nav class="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
    <div class="container">
        <a class="navbar-brand mx-auto d-lg-none" href="index.html">
           Doctor Desk
            <strong class="d-block">Health Specialist</strong>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
            
                
                <a class="navbar-brand d-none d-lg-block" href="/home">
                    Doctor Desk
                    <strong class="d-block">Health Specialist</strong>
                </a>
                <li class="nav-item active">
                    <a class="nav-link" href="/doctorAppointments">Pending Appointments</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/doctorConfirmAppointments">Confirm Appointments</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/doctorPatient">Patients</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/doctorLogout">Logout</a>
                </li>

               
            </ul>
        </div>

    </div>
</nav>


<section  style={{padding:"15px"}}>

    <div class="flex">
        <div style={{flex:"50%"}}><h5>9am-12pm</h5></div>
    </div>
   
    <table class="table">
        <thead class="table-success">
          <tr>
            <th>Patient Name</th>
            <th>Contact Number</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Disease</th>
            <th>Date</th>
            <th>Time</th>
            <th colspan="2" style={{"text-align":"center"}}>Action</th>

           

        </tr>
        </thead>
        <tbody>



          <tr>
          <td>KRINAQ</td>
            <td>123453r</td>
            <td>212122</td>
            <td>female</td>
            <td>AAAAAA</td>
            <td>212343</td>
            <td>122121</td>
            <td>
                <form method="POST" action="{% url 'doctorconfirmappointments' %}">
                  <input type="hidden" name="appointment_id" />
                  <button type="submit" class="btn btn-success">Accept</button>
                </form>
              </td> 
               <td>
                <form method="POST" action="{% url 'doctorappointments' %}">
                  <input type="hidden" name="appointment_id" />
                  <button type="submit" class="btn btn-danger">Remove</button>
                </form>
              </td> 
           
            <td><a href="/doc/deleteAppointment/{{app.id}}" class="btn btn-danger">Remove</a></td> 
          </tr>
          
        </tbody>
    </table>
   
</section>
<section  style={{padding:"15px"}}>

    <div class="flex">
        <div style={{flex:"50%"}}><h5>4pm-7pm</h5></div>
    </div>
   
    <table class="table">
        <thead class="table-success">
          <tr>
            <th>Patient Name</th>
            <th>Contact Number</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Disease</th>
            <th>Date</th>
            <th>Time</th>
            <th colspan="2" style={{"text-align":"center"}}>Action</th>



        </tr>
        </thead>
        <tbody>

          <tr>
            <td>KRINAQ</td>
            <td>123453r</td>
            <td>212122</td>
            <td>female</td>
            <td>AAAAAA</td>
            <td>212343</td>
            <td>122121</td>
            <td>
                <form method="POST">
                  <input type="hidden" name="appointment_id" />
                  <button type="submit" class="btn btn-success">Accept</button>
                </form>
              </td> 
              
              <td>
                <form method="POST" >
                  <input type="hidden" name="appointment_id" />
                  <button type="submit" class="btn btn-danger">Remove</button>
                </form>
              </td> 
          <td><a href="/doc/deleteAppointment/{{app.id}}" class="btn btn-danger">Remove</a></td>           </tr>
          

          
        </tbody>
    </table>
    
   
</section>
</main>
        </div>
    )
}

export default doctorAppointments;