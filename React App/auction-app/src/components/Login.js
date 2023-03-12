import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./slice";

const init = {
  username: { value: "", hasError: true, touched: false, error: "" },
  password: { value: "", hasError: true, touched: false, error: "" },
  isFormValid: false,
};

const init1 = {
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

function Login() {
  const [info, dispatch] = useReducer(reducer, init);
  const [info1, dispatch1] = useReducer(reducer1, init1);

  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const reduxAction = useDispatch();

  const onInputChange = (username, value) => {
    const { hasError, error } = validateData(username, value);
    let isFormValid = true;

    for (const key in info) {
      const item = info[key];
      if (info[key].hasError === true) {
        isFormValid = false;
        break;
      }
      // else if(key!==username && item.hasError)
      // {
      //     isFormValid=false;
      //     break
      // }
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
        let regex1 =
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (!regex1.test(value)) {
          hasError = true;
          error =
            "Minimum eight characters, at least one letter, one number and one special character";
        }
    }
    // console.log(info.username.value);
    // console.log(info.password.value);
    return { hasError, error };
  };

  const sendData = (e) => {
    e.preventDefault();

    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info1),
    };

    fetch("http://localhost:8080/checklogin", reqOptions)
      .then((resp) => {
        if (resp.ok) return resp.text();
        // else throw new Error("Server Error");
      })
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        if (Object.keys(obj).length === 0) {
          setMsg("Wrong Username or Password");
        } else {
          if (obj.account_status === "pending") {
            setMsg("Request is still pending");
            // alert("Request is still pending");
          } else {
            reduxAction(login());
            localStorage.setItem("loggedUser", JSON.stringify(obj));
            const user_id = JSON.parse(
              localStorage.getItem("loggedUser")
            ).user_id;
            if (obj.user_type_id.user_type_id === 1) {
              setMsg("");
              navigate("/admin_home");
            } else if (obj.user_type_id.user_type_id === 2) {
              setMsg("");
              navigate("/seller_home");
            } else if (obj.user_type_id.user_type_id === 3) {
              setMsg("");
              navigate("/bidder_home");
            }
          }
        }
      });
  };

  return (
    <>
      <div
        className="Auth-form-container App2"
        style={{ alignItems: "center" }}
      >
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet? <Link to="/Signup">Sign Up</Link>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control mt-1"
                value={info1.username}
                onKeyDown={(e) => {
                  onInputChange("username", e.target.value);
                }}
                onChange={(e) => {
                  dispatch1({
                    type: "update",
                    fld: "username",
                    value: e.target.value,
                  });
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
              {/* <p
                style={{
                  display:
                    state.username.touched && state.username.hasError
                      ? "block"
                      : "none",
                  color: "red",
                }}
              >
                {state.username.error}{" "}
              </p> */}
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control mt-1"
                value={info1.password}
                onKeyDown={(e) => {
                  onInputChange("password", e.target.value);
                }}
                onChange={(e) => {
                  dispatch1({
                    type: "update",
                    fld: "password",
                    value: e.target.value,
                  });
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
            <br />
            <button
              type="submit"
              className="btn btn-primary mb-3"
              onClick={(e) => {
                sendData(e);
              }}
            >
              Submit
            </button>

            <button
              type="reset"
              className="btn btn-primary mb-3"
              onClick={(e) => {
                dispatch({ type: "reset" });
              }}
            >
              Clear
            </button>
            <p className="text-center mt-2">
              <Link to="/forgot">Forget password</Link>
            </p>
            <br />
            <p className="error">{msg}</p>
          </div>
        </form>
        {/* <p>{JSON.stringify(info1)}</p> */}
      </div>
    </>
  );
}

export default Login;
