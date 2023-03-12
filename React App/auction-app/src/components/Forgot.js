import { useReducer, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
const init1 = {
  username: "",
  answer: "",
  q_id: "",
};

const reducer1 = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.fld]: action.value };

    case "reset":
      return init1;
  }
};

let Forget = () => {
  const [info1, dispatch1] = useReducer(reducer1, init1);
  const navigate = useNavigate();

  const sendData = (e) => {
    e.preventDefault();

    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info1),
    };
    // fetch("http://localhost:8080/regproduct", reqOptions)
    //   .then((resp) => {
    //     if (resp.ok) return resp.json();
    //     else throw new Error("Server Error");
    //   })
    //   .then((obj) => {
    //     console.log(obj);
    //     const pid = obj.p_Id;
    fetch("http://localhost:8080/forget", reqOptions)
      .then((resp) => {
        //resp.text();
        console.log("hello");
        if (resp.ok) {
          console.log("hello");
          return resp.text();
        } else {
          alert("username is invalid");
        }
        // else throw new Error("Server Error");
      })
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then((obj) => {
        if (Object.keys(obj).length === 0) {
          // alert("Password reset successfully");
          //Navigate("/password");
          alert("username is invalid");
        } else {
          // //if ( text == 0) {
          //   //setMsg("Request is still pending");
          navigate("/password");
        }
      });
  };
  return (
    <div>
      <div className="Auth-form-container App1">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Forget password</h3>

            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={info1.username}
                className="form-control mt-1"
                onChange={(e) => {
                  dispatch1({
                    type: "update",
                    fld: "username",
                    value: e.target.value,
                  });
                }}
              />
            </div>

            {/* <p>welcome{info1.username}</p> */}

            <div className="form-group mt-3">
              <label>Question</label>
              <select
                name="q_id"
                id="question"
                //value={info1.question}
                className="form-control mt-1"
                onChange={(e) => {
                  dispatch1({
                    type: "update",
                    fld: "q_id",
                    value: e.target.value,
                  });
                }}
              >
                <option value="">Select Question</option>
                <option value="1">What is the name of your first pet?</option>
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
                <option value="7">What is your mother's maiden name?</option>
                <option value="8">
                  Which is your favourite vacation spot?
                </option>
              </select>
              {/* <p>welcome{info1.question}</p> */}
            </div>

            <div className="form-group mt-3">
              <label>Answer</label>
              <input
                type="text"
                id="answer"
                onChange={(e) => {
                  dispatch1({
                    type: "update",
                    fld: "answer",
                    value: e.target.value,
                  });
                }}
                className="form-control mt-1"
                placeholder="Enter Answer"
              />
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
export default Forget;
