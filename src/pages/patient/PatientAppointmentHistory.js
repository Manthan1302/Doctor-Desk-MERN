import img1 from '../../image/Medical prescription-bro.png'
import PatientNavbar from './PatientNavbar'
import '../../css/appointmentbook.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
function PatientAppointmentHistory() {
    const navigate = useNavigate();
    const [myAppointment, setMyAppointment] = useState([]);

    useEffect(() => {
        getMyAppointment();
    }, []);


    const refresh = (e) => {
        e.preventDefault();
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

    const deleteMyAppointment = async (item) => {
        const id = item._id;
        let token = localStorage.getItem("PatientToken");
        token = JSON.parse(token);
        try {
            const headers = { headers: { Authorization: `Bearer ${token}` } };
            const response = await axios.delete(`http://localhost:8888/patient/cancelAppointment/${id}`, headers);
            // navigate("/doctorConfirmAppointments");
            window.location.reload();
            console.log(response);
        } catch (error) {
            console.log('error', error);
        }
    }
    return (
        <div>

            <PatientNavbar></PatientNavbar>



            <table class="table">
                <thead class="table-success">
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Disease</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myAppointment.map((item) => {
                            var currentDate = new Date()
                            var day = currentDate.getDate()
                            var month = currentDate.getMonth() + 1
                            var year = currentDate.getFullYear()
                            var date = year + "-" + month + "-" + day
                            if (item.bookingDate < date && item.appointmentStatus === "approved") {
                                return (
                                    <tr>
                                        <td>{item.bookingDate}</td>
                                        <td>{item.TimeSlot}</td>
                                        <td>{item.appointmentDiseases}</td>
                                        <td>{item.appointmentStatus}</td>
                                        <td>
                                            <button type="submit" class="btn btn-danger" onClick={() => deleteMyAppointment(item)}>Delete</button>
                                        </td>
                                    </tr>

                                )
                            }

                        })
                    }


                </tbody>
            </table>
        </div>
    )
}

export default PatientAppointmentHistory;