import React from "react";

const LoginSignUp = () => {
  return (
    <>
      <nav className="nav nav-pills m-auto flex-column flex-sm-row w-50">
        <a
          className="flex-sm-fill text-sm-center nav-link"
          aria-current="page"
          href="#"
        >
          Login
          <div>
            <form className="row g-3 needs-validation" novalidate>
              <div className="col-md-4">
                <label for="validationCustomUsername" className="form-label">
                  Username
                </label>
                <div className="input-group has-validation">
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter email address
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label for="validationCustom03" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  required
                />
                <div className="invalid-feedback">
                  Password is incorrect.
                </div>
              </div>
              
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </a>
        <a className="flex-sm-fill text-sm-center nav-link" href="#">
          Sign Up
          <div>
            <form className="row g-3 needs-validation" novalidate>
              <div className="col-md-4">
                <label for="validationCustom01" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  value=""
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label for="validationCustom02" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  value=""
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label for="validationCustomUsername" className="form-label">
                  email address
                </label>
                <div className="input-group has-validation">
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <div className="invalid-feedback">
                    Please eneter valid email.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                  />
                  <label className="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </a>
      </nav>
    </>
  );
};
export default LoginSignUp;
