import { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const init = {
  username: { value: "", hasError: true, touched: false, error: "" },
  password: { value: "", hasError: true, touched: false, error: "" },
  rpassword: { value: "", hasError: true, touched: false, error: "" },

  isFormValid: false,
};

const init1 = {
  username: "",
  password: "",
  rpassword: "",
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

let Password = () => {
  const [info, dispatch] = useReducer(reducer, init);
  const [info1, dispatch1] = useReducer(reducer1, init1);

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
      case "username":
        let regex = /^[A-Za-z0-9!@#$%^&*]{4,16}$/;

        if (!regex.test(value)) {
          hasError = true;
          error =
            "username should be first letter capital rest small in 4-15 character";
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

        break;
      case "rpassword":
        let regex10 =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (!regex10.test(value)) {
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

    fetch("http://localhost:8080/reset1", reqOptions)
      .then((resp) => {
        console.log(resp);
        if (resp.ok) return resp.text();
        // else throw new Error("Server Error");
      })
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        console.log("fsf");
        if (Object.keys(obj).length === 0) {
          // alert("Password reset successfully");
          //Navigate("/password");
          alert("password reset successfully");
          navigate("/login");
        } else {
          // //if ( text == 0) {
          //   //setMsg("Request is still pending");

          alert("password reset failed");
        }
      });
  };

  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Forget password</h3>

            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                name="username"
                id="username"
                // value={info1.username}
                className="form-control mt-1"
                onChange={(e) => {
                  dispatch1({
                    type: "update",
                    fld: "username",
                    value: e.target.value,
                  });
                }}
                onKeyDown={(e) => {
                  onInputChange("username", e.target.value);
                }}
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
              <label>Confirm Password</label>
              <input
                type="text"
                name="password"
                id="password"
                // value={info1.us}
                className="form-control mt-1"
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

            {/* <p>welcome{info1.password}</p> */}

            <div className="form-group mt-3">
              <label>Re-Confirm Password</label>
              <input
                type="text"
                name="rpassword"
                id="rpassword"
                //value={info1.us}
                className="form-control mt-1"
                onChange={(e) => {
                  dispatch1({
                    type: "update",
                    fld: "rpassword",
                    value: e.target.value,
                  });
                }}
                onKeyDown={(e) => {
                  onInputChange("rpassword", e.target.value);
                }}
              />

              <p
                style={{
                  display:
                    info.rpassword.touched && info.rpassword.hasError
                      ? "block"
                      : "none",
                  color: "red",
                }}
              >
                {info.rpassword.error}{" "}
              </p>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary mb-3"
                onClick={(e) => {
                  sendData(e);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* <p>{JSON.stringify(info1)}</p> */}
    </div>
  );
};

export default Password;
