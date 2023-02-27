import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?
            <Link to="/login">Sign In</Link>
          </div>
          <table>
            <tr>
              <td>
                {/* <br/>
                <br/>
                <br/> */}
                <div className="form-group mt-3">
                  <label>User Type</label>
                  <select
                    name="user_type_id"
                    id="user_type_id"
                    className="form-control mt-1"
                    placeholder="Enter First Name"
                  >
                    <option value="">Select Account Type</option>
                    <option value="Seller">Seller</option>
                    <option value="Bidder">Bidder</option>
                  </select>
                </div>

                <div className="form-group mt-3">
                  <label>Fname</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter First Name"
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Lname</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter Last Name"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Mobile </label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter Mobile Number"
                  />
                </div>

                <div className="form-group mt-3">
                  <label>State</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter State Name"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>City</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter city Name"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>pincode</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter pincode"
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter Address"
                  />
                </div>
              </td>

              <td>
                <div className="form-group mt-3">
                  <label>Gender</label>
                  <select
                    name="gender"
                    id="gender"
                    className="form-control mt-1"
                    placeholder="Enter First Name"
                  >
                    <option value="male" selected="selected">
                      Male
                    </option>
                    <option value="female" selected="selected">
                      Female
                    </option>
                    <option value="other" selected="selected">
                      Other
                    </option>
                    <option value="notPreffered" selected="selected">
                      not preffered to say
                    </option>
                  </select>
                </div>

                <div className="form-group mt-3">
                  <label>Pan Card No</label>
                  <input
                    type="number"
                    className="form-control mt-1"
                    placeholder="Enter Pan card no"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Pan card Images</label>
                  <input
                    type="image"
                    className="form-control mt-1"
                    placeholder=""
                  />
                </div>

                <div className="form-group mt-3">
                  <label>account Status</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter Last Name"
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Question id</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Question id"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Answer</label>
                  <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter Answer"
                  />{" "}
                  <div className="form-group mt-3">
                    <label>UserName</label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      placeholder="Enter UserName"
                    />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Password"
                  />
                </div>
              </td>
            </tr>
          </table>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
