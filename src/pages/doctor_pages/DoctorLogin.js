function DoctorLogin(){
    return( 
        <div>

<nav class="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
		<div class="container">
			<a class="navbar-brand mx-auto d-lg-none" href="index.html">
				Medic Care
				<strong class="d-block">Health Specialist</strong>
			</a>

			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav mx-auto">
				  
					<a class="navbar-brand d-none d-lg-block" href="index.html">
					   Doctor Desk
						<strong class="d-block">Health Specialist</strong>
					</a>
					
				</ul>
			</div>
		</div>
	</nav>

	
	<section class="h-100 h-custom">
		<div class="container py-5 h-100">
		  <div class="row d-flex justify-content-center align-items-center h-100">
			<div class="col-lg-8 col-xl-6">
			  <div class="card rounded-3">
			
				<div class="card-body p-4 p-md-5">
				  <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Doctor Login</h3>
				  

				  <form class="px-md-2" method="post">
	  
					
					<div class="form-outline mb-4">
					  <label class="form-label" for="form3Example1q">Phone Number</label>
					  <input
					  type="tel"
					  class="form-control"
					  placeholder="Enter your phone number"
					  name="drPhonenumber"
					  pattern="[6-9]\d{9}"
                    title="Incorrect Mobile Number"
					  required/>
					</div>
				<div class="form-outline mb-4">
				  <label class="form-label" for="form3Example1q">Password</label>
				  <input
					type="password"
					class="form-control"
					placeholder="Enter password"
					name="drpassword"
					required
				  />
				</div>

				  <button type="submit" class="btn btn-success btn-lg mb-1">Login</button>
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

export default DoctorLogin;