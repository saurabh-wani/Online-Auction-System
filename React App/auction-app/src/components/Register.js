import React, { useReducer, useState } from "react";

const init = {
  username: { value: "", hasError: true, touched: false, error: "" },
  passwword: { value: "", hasError: true, touched: false, error: "" },
  //isFormValid: false,
};

// const validateData = (username, value) => {
//   let hasError = false;
//   error = "";
//   switch (username) {
//     case "username":
//       let regex = /^[A-Za-z0-9!@#$%^&*]{2,16}$/;

//       if (regex.test(value)) {
//         hasError = true;
//         error =
//           "username should be first letter capital rest small in 2-15 character";
//       }

//       break;
//     case "password":
//       let regex1 = /^[A-Za-z0-9$@*-]{2,16}$/;

//       if (regex1.test(value)) {
//         hasError = true;
//         error = "Password should have any special symbol";
//       }
//   }

//   return { hasError, error };
// };

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.fld]: action.val };
    case "reset":
      return init;
  }
};

export default function RegisterForm() {
  const [info, dispatch] = useReducer(reducer, init);
  //     const onInputChange=(username,value,dispatch)=>
  //     {
  //         const {hasError,error}=validateData(username,value);
  //         let isFormValid=true;

  //         for(const key in state)
  //         {
  //             const item=state[key];
  //             if(key==username && hasError)
  //             {
  //                 isFormValid=false;
  //                 break
  //             }
  //             else if(key!==username && item.hasError)
  //             {
  //                 isFormValid=false;
  //                 break
  //             }
  //         }
  //         dispatch({type:'update',data:{username,value,hasError,error,touched:true,isFormValid},})
  //     }

  //     const onFocusOut=(username,value,dispatch)=>
  //    {
  //     const [state,dispatch]=useReducer(reducer,init);
  //     let isFormValid=true
  //     error="";
  //     switch(username){

  //         case "username":
  //             let regex= /^[A-Z] [a-z 0-9]{2,16}$/;

  //             if(regex.test(value))
  //             {
  //                 hasError=true;
  //                 error="username should be first letter capital rest small in 2-15 character";
  //             }

  //             break;
  //             case "password":
  //                 let regex1= /^[A-Za-z0-9$@*-]{2,16}$/;

  //                 if(regex1.test(value))
  //                 {
  //                     hasError=true;
  //                     error="Password should have any special symbol";
  //                 }

  //     }

  //     return{hasError,error}

  // }

  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>

            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={state.username.value}
                //onChange={(e)=>{onInputChange("username",e.target.value,dispatch)}}
                //onBlur={(e)=>{onFocusOut("username",e.target.value,dispatch)}}
                className="form-control mt-1"
                placeholder="Enter Username"
              />
              <p
                style={{
                  display:
                    state.username.touched && state.username.hasError
                      ? "block"
                      : "none",
                  color: "red",
                }}
              >
                {state.username.error}{" "}
              </p>
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                //onChange={(e)=>{onInputChange("password",e.target.value)}}
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
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

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
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
                    <option value="Seller" selected="selected">
                      Seller
                    </option>
                    <option value="Bidder" selected="selected">
                      Bidder
                    </option>
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
