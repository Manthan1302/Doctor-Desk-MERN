import img1 from '../image/Medical prescription-bro.png'
import PatientNavbar from './PatientNavbar'
import '../css/appointmentbook.css'

function PatientAppointmentBook(){
    return(
        <div>
            
      <PatientNavbar></PatientNavbar>

            <div className="flex">
                <div className="half">
      <img src={img1} className="img-fluid galleryImage"  alt="get a vaccine" title="get a vaccine for yourself"/>
      <hr/></div>
    <div className="formbold-main-wrapper half">
    <div className="formbold-form-wrapper">
      <form  method="post">
      <h3 for="name"  >Appointment Booking Form</h3><br/><br/>
        <div className="formbold-mb-5">
          <label for="name" className="formbold-form-label" > Full Name </label>
          <input
            type="text"
            id="name"
            name="patientName" 
            placeholder="Enter Patient's Name"
            className="formbold-form-input"
            required
            
          />
        </div>
        <div className="formbold-mb-5">
          <label for="phone" className="formbold-form-label"> Phone Number </label>
          <input
            type="text"
            name="contactNumber"
            id="phone"
            pattern="[6-9]\d{9}"
            placeholder="Enter your phone number"
            className="formbold-form-input"
            required
          />
        </div>
        <div className="formbold-mb-5">
          <label for="age" className="formbold-form-label">Age </label>
          <input
            type="number"
            name="patientAge"
            id="age"
            placeholder="Enter your age"
            className="formbold-form-input"
          />
        </div>
        <div className="col-sm-4 mb-4">
          <label for="gender" className="formbold-form-label">Gender:</label>
          <input
          type="text"
          name="patientGender"
          id="gender"
          placeholder="Enter Gender"
          className="formbold-form-input"
        />
        </div>
  
        <div className="flex flex-wrap formbold--mx-3">
          <div className="w-full sm:w-half formbold-px-3">
            <div className="formbold-mb-5 w-full">
              <label for="date" className="formbold-form-label"> Date </label>
              <input
                type="date"
                name="appointment_date"
                id="date"
                className="formbold-form-input"
                placeholder="Select date" 
                required
                min="2023-07-28"
              />
            </div>
          </div>
          <div className="w-full sm:w-half formbold-px-3">
            <div className="formbold-mb-5">
              <label for="time" className="formbold-form-label">Choose Time Time </label>
              {/* <p className="alert alert-success" align="center">full</p> */}
              {/* <label>
                <input type="radio" name="timeSlot" value="9-12" disabled/>
                9 AM - 12 PM
              </label>
              <br/> */}

              
                <input type="radio" name="timeSlot" value="9-12"/> 
                9 AM - 12 PM
              <br/>
              <label>
                <input type="radio" name="timeSlot" value="4-7"/>
                4 PM - 7 PM
              </label>

              <br/>
              {/* <label>
                <input type="radio" name="timeSlot" value="4-7" disabled/>
                4 PM - 7 PM
              </label> */}

{/* 
              <label>
                <input type="radio" name="timeSlot" value="9-12" />
                9 AM - 12 PM
              </label>
              <br/>
              <label>
                <input type="radio" name="timeSlot" value="4-7" />
                4 PM - 7 PM
              </label>

              */}

            </div>
          </div>
         
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Diseases</label>
          <textarea className="form-control" name="diseases" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Diseases" ></textarea>
        </div>
        <div>
          <button className="formbold-btn">Book Appointment</button>
        </div>
        
      </form>
    </div>
    </div>
</div>

        </div>
    )
}

export default PatientAppointmentBook;