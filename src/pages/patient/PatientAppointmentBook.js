import img1 from '../../image/Medical prescription-bro.png'
import PatientNavbar from './PatientNavbar'
import '../../css/appointmentbook.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
function PatientAppointmentBook() {
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState({
    bookingDate: "",
    TimeSlot: "",
    appointmentDiseases: ""
  });
  const [myAppointment, setMyAppointment] = useState([]);

  useEffect(() => {
    getMyAppointment();
  }, []);


  const refresh = (e) => {
    e.preventDefault();
  };
  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setAppointment((preVal) => {
      return {
        ...preVal,
        [name]: value
      }
    })
  }
  const bookAppointment = async () => {
    console.log('appointment', appointment);
    let token = localStorage.getItem("PatientToken");
    token = JSON.parse(token);
    console.log(token);

    try {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.post(`http://localhost:8888/patient/bookAppointment?doctor=651acb82241a965a80964200`, appointment, headers)
        .then(res => {
          console.log(res);
          navigate('/patientHome')
        })
    } catch (error) {
      console.log('error', error);
    }
  };


  const getMyAppointment = async () => {
    let token = localStorage.getItem("PatientToken");
    token = JSON.parse(token);
    try {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get("http://localhost:8888/patient/getMyAppointment", headers);
      console.log('response', response);
      if (response) {
        setMyAppointment(response.data);
      }
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  }
  return (
    <div>

      <PatientNavbar></PatientNavbar>

      <div className="flex">
        <div className="half">
          <img src={img1} height={"500px"} alt="get a vaccine" title="get a appointment for yourself" />
        </div>
        <div className="formbold-main-wrapper half">
          <div className="formbold-form-wrapper">
            <form method="post" onSubmit={(e) => refresh(e)}>
              <h3 for="name"  >Appointment Booking Form</h3><br /><br />
              <div className="flex flex-wrap formbold--mx-3">
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5 w-full">
                    <label for="date" className="formbold-form-label"> Date </label>
                    <input
                      type="date"
                      name="bookingDate"
                      id="date"
                      className="formbold-form-input"
                      placeholder="Select date"
                      required
                      onChange={setData}
                      value={appointment.bookingDate}
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


                    <input type="radio" name="TimeSlot" value="9-12" onChange={setData} />
                    9 AM - 12 PM
                    <br />
                    <label>
                      <input type="radio" name="TimeSlot" value="4-7" onChange={setData} />
                      4 PM - 7 PM
                    </label>

                    <br />
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
                <textarea className="form-control"
                  name="appointmentDiseases"
                  value={appointment.appointmentDiseases}
                  id="exampleFormControlTextarea1"
                  onChange={setData}
                  rows="3" placeholder="Enter Diseases" ></textarea>
              </div>
              <div>
                <button className="formbold-btn" onClick={bookAppointment}>Book Appointment</button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <hr />

      <table class="table">
        <thead class="table-success">
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Disease</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            myAppointment.map((item) => {
              return (
                <tr>
                  <td>{item.bookingDate}</td>
                  <td>{item.TimeSlot}</td>
                  <td>{item.appointmentDiseases}</td>
                  <td>{item.appointmentStatus}</td>
                </tr>

              )
            })
          }


        </tbody>
      </table>
    </div>
  )
}

export default PatientAppointmentBook;