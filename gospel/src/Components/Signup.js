import React from 'react';
import Nav from './Nav';

function Signup() {
  return (
    <>
     <Nav />
     <div className="container-fluid" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <div className="card text-black m-2 bg-secondary" style={{ borderRadius: '2px' }}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-10 col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-center">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <i className="fas fa-user me-3" style={{ fontSize: 'lg' }}></i>
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-envelope me-3" style={{ fontSize: 'lg' }}></i>
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-lock me-3" style={{ fontSize: 'lg' }}></i>
                  <input type="password" className="form-control" placeholder="Password" />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-key me-3" style={{ fontSize: 'lg' }}></i>
                  <input type="password" className="form-control" placeholder="Repeat your password" />
                </div>

                <div className='mb-4'>
                  <input type="checkbox" id="flexCheckDefault" className="form-check-input" />
                  <label htmlFor="flexCheckDefault" className="form-check-label">Subscribe to our channel @_civeDevelopers</label>
                </div>

                <button className='btn btn-lg mb-4 bg-success'>Register</button>
              </div>

              <div className="col-md-10 col-lg-6 order-1 order-lg-2 d-flex align-items-center">
                <img src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' alt='registration' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
