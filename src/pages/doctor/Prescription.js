// import { addmedicine } from '../../css/addmedicine.js'
// import '../../css/addmedicine.css'



function Prescription() {
    var counter = 1
    function addmedicine() {
        ;
        counter++;


        let fr = document.getElementById("frm").innerHTML

        document.getElementById("counter").innerText = "Medicines:" + counter
        document.getElementById("tableArea").innerHTML = fr


    }


    return (
        <div>
            <section class="h-100 h-custom">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-8 col-xl-6">
                            <div class="card rounded-3">

                                <div class="card-body p-4 p-md-5">

                                    <h1>Prescription Form</h1>
                                    <form action="process-prescription.php" method="POST">

                                        <div class="form-group">
                                            <label for="patientName">Patient Name:</label>
                                            <input type="text" class="form-control" id="patientName" name="patientName" required /><br />
                                        </div>

                                        <div class="form-group">
                                            <label for="currentDate">Current Date:</label>
                                            <input type="date" class="form-control" id="currentDate" name="currentDate" required /><br />

                                        </div>


                                        <div class="form-group">
                                            <label for="patientPhoneNumber">Patient Phone Number:</label>
                                            <input type="tel" class="form-control" id="patientPhoneNumber" name="patientPhoneNumber" required /><br />
                                        </div>

                                        <div class="form-group">
                                            <label for="patientAge">Patient Age:</label>
                                            <input type="number" class="form-control" id="patientAge" name="patientAge" required /><br />
                                        </div>

                                        <label for="clinicAddress">Clinic Address:</label>
                                        <input type="text" class="form-control" id="clinicAddress" name="clinicAddress" required /><br />

                                        <label for="diagnosis">Diagnosis:</label>
                                        <textarea id="diagnosis" class="form-control" name="diagnosis" rows="4" required></textarea><br />
                                        <div class="form-group">
                                            <label for="doctorName">Doctor's Name:</label>
                                            <input type="text" class="form-control" id="doctorName" name="doctorName" required /><br />
                                        </div>




                                        <form id="frm">

                                            <h2 id="counter"> Medicines:1</h2>


                                            <label for="medication1Name">Medication 1 Name:</label>
                                            <input type="text" class="form-control" id="medication1Name" name="medication1Name" required /><br />

                                            <div class="form-group">
                                                <label for="medication1Dosage">Dosage:</label>
                                                <input type="text" class="form-control" value="1-1-1" id="medication1Dosage" name="medication1Dosage" required /><br />
                                            </div>

                                            <div class="form-group">
                                                <label for="medication1Frequency">Frequency:</label>
                                                <input type="text" class="form-control" id="medication1Frequency" name="medication1Frequency" required /><br />
                                            </div>

                                            <div class="form-group">
                                                <label for="medication1Duration">Duration:</label>
                                                <input type="text" id="medication1Duration" name="medication1Duration" required /><br />

                                            </div>


                                            <div class="form-group">
                                                <label for="specialInstructions">Special Instructions:</label>
                                                <textarea id="specialInstructions" class="form-control" name="specialInstructions" rows="4"></textarea><br />

                                            </div>

                                            <div id="tableArea">

                                            </div>
                                        </form>



                                        <input type="submit" className="flex" value="Submit" />
                                        <button className="btn btn-primary" onClick={addmedicine}>Add medicine</button>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Prescription