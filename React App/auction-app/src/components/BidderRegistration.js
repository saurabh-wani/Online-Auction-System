import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { login } from "./slice";

const init = {
  fname: { value: "", hasError: true, touched: false, error: "" },
  lname: { value: "", hasError: true, touched: false, error: "" },
  email: { value: "", hasError: true, touched: false, error: "" },
  mobile: { value: "", hasError: true, touched: false, error: "" },
  state: { value: "", hasError: true, touched: false, error: "" },
  city: { value: "", hasError: true, touched: false, error: "" },
  pincode: { value: "", hasError: true, touched: false, error: "" },
  address: { value: "", hasError: true, touched: false, error: "" },
  pan_card_number: { value: "", hasError: true, touched: false, error: "" },
  answer: { value: "", hasError: true, touched: false, error: "" },
  username: { value: "", hasError: true, touched: false, error: "" },
  password: { value: "", hasError: true, touched: false, error: "" },

  isFormValid: false,
};

const init1 = {
  user_type_id: 3,
  fname: "",
  lname: "",
  email: "",
  mobile: "",
  state: "",
  city: "",
  pincode: "",
  address: "",
  gender: "",
  pan_card_number: "",
  account_status: "approved",
  q_id: "",
  answer: "",
  username: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update": {
      const { username, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [username]: { username, value, hasError, error, touched },
        isFormValid,
      };
    }
    case "reset": {
      return init;
    }
  }
};

const reducer1 = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.fld]: action.value };

    case "reset":
      return init1;
  }
};

export default function BidderRegistration() {
  const [info, dispatch] = useReducer(reducer, init);
  const [info1, dispatch1] = useReducer(reducer1, init1);
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const onInputChange = (username, value) => {
    const { hasError, error } = validateData(username, value);
    let isFormValid = true;

    for (const key in info) {
      const item = info[key];
      if (info[key].hasError === true) {
        isFormValid = false;
        break;
      }
    }
    dispatch({
      type: "update",
      data: { username, value, hasError, error, touched: true, isFormValid },
    });
  };

  const validateData = (name, value) => {
    let hasError = false;
    let error = "";
    switch (name) {
      case "fname":
        let regex2 = /^[A-Za-z0-9!@#$%^&*]{2,16}$/;

        if (!regex2.test(value)) {
          hasError = true;
          error = "Fname should contain atleast 2 character";
        }

        break;

      case "lname":
        let regex3 = /^[A-Za-z0-9!@#$%^&*]{2,16}$/;

        if (!regex3.test(value)) {
          hasError = true;
          error = "Lname should contain atleast 2 character";
        }

        break;

      case "email":
        let regex4 = /.+\@.+\..+/;

        if (!regex4.test(value)) {
          hasError = true;
          error = "email should contain @ and . symbol";
        }
        break;

      case "mobile":
        let regex5 = /^[0-9]{10}$/;

        if (!regex5.test(value)) {
          hasError = true;
          error = "It should contain only 10 digit";
        }
        break;

      case "pincode":
        let regex6 = /^[0-9]{6}$/;

        if (!regex6.test(value)) {
          hasError = true;
          error = "it should contain 6 digit only ";
        }
        break;

      case "pan_card_number":
        let regex7 = /^[A-Z0-9]{10}$/;

        if (!regex7.test(value)) {
          hasError = true;
          error = "it should contain only capital and 10 digit only ";
        }

        break;

      case "username":
        let regex8 = /^[A-Za-z0-9!@#$%^&*]{4,16}$/;

        if (!regex8.test(value)) {
          hasError = true;
          error = "username should be 4-15 characters long";
        }

        break;
      case "password":
        let regex9 =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (!regex9.test(value)) {
          hasError = true;
          error =
            "Minimum eight characters, at least one letter, one number and one special character";
        }
    }

    return { hasError, error };
  };

  const sendData = (e) => {
    e.preventDefault();

    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info1),
    };

    fetch("http://localhost:8080/regbidder", reqOptions)
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error("Server Error");
      })
      .then((obj) => {
        const fd = new FormData();
        fd.append("file", file);
        const reqOptions1 = {
          method: "POST",
          //headers: { "content-type": "multipart/form-data" },
          body: fd,
        };
        fetch(
          "http://localhost:8080/uploadpancardimage/" + obj.user_id,
          reqOptions1
        )
          .then((resp) => resp.json())
          .then((obj) => {
            if (obj) {
              alert("Registration succesful.Try Login.");
              navigate("/");
            } else {
              alert(
                "Registration succesful.Pan card image submission failed.Try Login"
              );
              navigate("/");
            }
          });
        // alert("Registration succesful.Try Login.");
        // navigate("/");
      })
      .catch((error) => alert("server error"));

    // fetch("http://localhost:8080/checklogin", reqOptions)
    //   .then((resp) => {
    //     if (resp.ok) return resp.text();
    //     // else throw new Error("Server Error");
    //   })
    //   .then((text) => (text.length ? JSON.parse(text) : {}))
    //   .then((obj) => {
    //     if (Object.keys(obj).length === 0) {
    //       setMsg("Wrong Username or Password");
    //     } else {
    //       if (obj.account_status === "pending") {
    //         setMsg("Request is still pending");
    //         // alert("Request is still pending");
    //       } else {
    //         // reduxAction(login());
    //         // localStorage.setItem("loggedUser", JSON.stringify(obj));
    //         if (obj.user_type_id.user_type_id === 1) {
    //           setMsg("");
    //           navigate("/admin_home");
    //         } else if (obj.user_type_id.user_type_id === 2) {
    //           setMsg("");
    //           navigate("/seller_home");
    //         } else if (obj.user_type_id.user_type_id === 3) {
    //           setMsg("");
    //           navigate("/bidder_home");
    //         }
    //       }
    //     }
    //   });
  };

  return (
    <div className="Auth-form-container App1">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?
            <Link to="/login">Sign In</Link>
          </div>
          <h3>You are Registering as Bidder</h3>
          <table>
            <tr>
              <td>
                {/* <br/>
                  <br/>
                  <br/> */}
                {/* <div className="form-group mt-3">
                  <label>User Type</label>
                  <select
                    name="user_type_id"
                    id="user_type_id"
                    className="form-control mt-1"
                    placeholder="Enter First Name"
                  >
                    <option value="">Select Account Type</option>
                    <option value="2">Seller</option>
                    <option value="3">Bidder</option>
                  </select>
                </div> */}

                <div className="form-group mt-3">
                  <label>First Name:</label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    //value={info.fname.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "fname",
                        value: e.target.value,
                      });
                    }}
                    onKeyDown={(e) => {
                      onInputChange("fname", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Enter Fname"
                  />
                  <p
                    style={{
                      display:
                        info.fname.touched && info.fname.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.fname.error}{" "}
                  </p>
                </div>

                <div className="form-group mt-3">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    //value={info.lname.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "lname",
                        value: e.target.value,
                      });
                    }}
                    onKeyDown={(e) => {
                      onInputChange("lname", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Enter Last Name"
                  />
                  <p
                    style={{
                      display:
                        info.lname.touched && info.lname.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.lname.error}{" "}
                  </p>
                </div>
                <div className="form-group mt-3">
                  <label>Email address</label>
                  <input
                    type="email"
                    id="email"
                    //value={info.email.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "email",
                        value: e.target.value,
                      });
                    }}
                    onKeyDown={(e) => {
                      onInputChange("email", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Email Address"
                  />
                  <p
                    style={{
                      display:
                        info.email.touched && info.email.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.email.error}{" "}
                  </p>
                </div>
                <div className="form-group mt-3">
                  <label>Mobile </label>
                  <input
                    type="text"
                    id="mobile"
                    //value={info.mobile.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "mobile",
                        value: e.target.value,
                      });
                    }}
                    onKeyDown={(e) => {
                      onInputChange("mobile", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Enter Mobile Number"
                  />
                  <p
                    style={{
                      display:
                        info.mobile.touched && info.mobile.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.mobile.error}{" "}
                  </p>
                </div>

                <div className="form-group mt-3">
                  <label>State</label>
                  <select
                    name="State"
                    id="State"
                    className="form-control mt-1"
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "state",
                        value: e.target.value,
                      });
                    }}
                    // onChange={(e) => {
                    //   onInputChange("state", e.target.value);
                    // }}
                  >
                    <option>Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">
                      Dadar and Nagar Haveli
                    </option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                  <p
                    style={{
                      display:
                        info.state.touched && info.state.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.state.error}{" "}
                  </p>
                </div>
                <div className="form-group mt-3">
                  <label>City</label>
                  <input
                    type="text"
                    id="city"
                    //value={info.city.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "city",
                        value: e.target.value,
                      });
                    }}
                    onKeyDown={(e) => {
                      onInputChange("city", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Enter city Name"
                  />
                  <p
                    style={{
                      display:
                        info.city.touched && info.city.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.city.error}{" "}
                  </p>
                </div>

                <div className="form-group mt-3">
                  <label>pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    id="pincode"
                    //value={info.pincode.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "pincode",
                        value: e.target.value,
                      });
                    }}
                    onBlur={(e) => {
                      onInputChange("pincode", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Enter pincode"
                  />
                  <p
                    style={{
                      display:
                        info.pincode.touched && info.pincode.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.pincode.error}{" "}
                  </p>
                </div>

                <div className="form-group mt-3">
                  <label>Address:</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    //value={info.address.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "address",
                        value: e.target.value,
                      });
                    }}
                    onKeyDown={(e) => {
                      onInputChange("address", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Enter Address"
                  />
                  <p
                    style={{
                      display:
                        info.address.touched && info.address.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.address.error}{" "}
                  </p>
                </div>
              </td>

              <td>
                <div className="form-group mt-3">
                  <label>Gender:</label>
                  <select
                    name="gender"
                    id="gender"
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "gender",
                        value: e.target.value,
                      });
                    }}
                    className="form-control mt-1"
                    placeholder="Enter First Name"
                  >
                    <option>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="not Prefer to say">
                      not preffered to say
                    </option>
                  </select>
                </div>

                <div className="form-group mt-3">
                  <label>Pan Card No</label>
                  <input
                    type="text"
                    name="pan_card_number"
                    id="pan_card_number"
                    //value={info.pan_card_number.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "pan_card_number",
                        value: e.target.value,
                      });
                    }}
                    onBlur={(e) => {
                      onInputChange("pan_card_number", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Enter Pan card no"
                  />
                  <p
                    style={{
                      display:
                        info.pan_card_number.touched &&
                        info.pan_card_number.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.pan_card_number.error}{" "}
                  </p>
                </div>
                <div className="form-group mt-3">
                  <label>Pan card Images</label>
                  <input
                    type="file"
                    className="form-control mt-1"
                    placeholder=""
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                  />
                </div>

                <div className="form-group mt-3">
                  <label>Security Question</label>
                  <select
                    name="q_id"
                    id="q_id"
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "q_id",
                        value: e.target.value,
                        //myProtein = parseInt(document.getElementById("proteinperc").value);
                      });
                    }}
                    className="form-control mt-1"
                    placeholder="Enter First Name"
                  >
                    <option>Select Question</option>
                    <option value="1">
                      What is the name of your first pet?
                    </option>
                    <option value="2">What is your favourite color?</option>
                    <option value="3">
                      What is the name of your favourite movie?
                    </option>
                    <option value="4"> What was your first car?</option>
                    <option value="5">
                      What elementary school did you attend?
                    </option>
                    <option value="6">
                      In which year you completed your graduation?
                    </option>
                    <option value="7">
                      What is your mother's maiden name?
                    </option>
                    <option value="8">
                      Which is your favourite vacation spot?
                    </option>
                  </select>
                </div>
                <div className="form-group mt-3">
                  <label>Answer</label>
                  <input
                    type="text"
                    name="answer"
                    id="answer"
                    //value={info.answer.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "answer",
                        value: e.target.value,
                      });
                    }}
                    onBlur={(e) => {
                      onInputChange("answer", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Enter Answer"
                  />

                  <p
                    style={{
                      display:
                        info.answer.touched && info.answer.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.answer.error}{" "}
                  </p>
                </div>

                <div className="form-group mt-3">
                  <label>UserName</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    //value={info.username.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "username",
                        value: e.target.value,
                      });
                    }}
                    onBlur={(e) => {
                      onInputChange("username", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Enter UserName"
                  />
                  <p
                    style={{
                      display:
                        info.username.touched && info.username.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.username.error}{" "}
                  </p>
                </div>

                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    id="password"
                    //value={info.password.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "password",
                        value: e.target.value,
                      });
                    }}
                    onKeyDown={(e) => {
                      onInputChange("password", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Password"
                  />
                  <p
                    style={{
                      display:
                        info.password.touched && info.password.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.password.error}{" "}
                  </p>
                </div>
              </td>
            </tr>
          </table>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                sendData(e);
              }}
            >
              Submit
            </button>
            <br />
            <button
              type="reset"
              className="btn btn-primary"
              onClick={(e) => {
                dispatch1({ type: "reset" });
              }}
            >
              Clear
            </button>
          </div>
        </div>
        {/* <p>{JSON.stringify(info1)}</p>
        <p>{file && file.name}</p> */}
        {/* <p>{JSON.stringify(info)}</p> */}
      </form>
    </div>
  );
}
