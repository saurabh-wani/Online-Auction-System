import { useState, useEffect, useReducer } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function PendingUsersForApproval() {
  useEffect(() => {
    fetch("http://localhost:8080/pendingusersforapproval")
      .then((resp) => resp.json())
      .then((data) => setUsers(data));
  }, []);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  return (
    <div>
      <h1 className="text-center" style={{ backgroundColor: "white" }}>
        {" "}
        Pending Products for Approval{" "}
      </h1>
      <table className="table table-bordered">
        {users.map((v) => {
          return (
            <tr>
              <td>
                Users Name: {v.fname + " " + v.lname}
                <br />
                Email: {v.email}
                <br />
                Mobile: {v.mobile}
                <br />
                Address : {v.address + ", " + v.city + " : " + v.pincode}
                <br />
                State: {v.fname + " " + v.lname}
                <br />
                Gender: {v.gender}
                <br />
                Pan Card Number: {v.pan_card_number}
              </td>
              <td>
                <img
                  src={`data:image/png;base64,${v && v.pan_card_image}`}
                  width="300"
                  height="250"
                />
              </td>
              <td>
                <button
                  type="button"
                  style={{ color: "blue" }}
                  className="btn btn-success"
                  onClick={(e) => {
                    const info = {
                      status: "approved",
                    };

                    const reqOptions = {
                      method: "PUT",
                      //headers: { "content-type": "application/json" },
                      // body: JSON.stringify(info),
                    };

                    fetch(
                      "http://localhost:8080/approveuser/" + v.user_id,
                      reqOptions
                    )
                      .then((resp) => {
                        if (resp.ok) return resp.json();
                        else throw new Error("Server Error");
                      })
                      .then((obj) => {
                        fetch("http://localhost:8080/pendingusersforapproval")
                          .then((resp) => resp.json())
                          .then((data) => setUsers(data));
                      })
                      .catch((error) => alert("server error"));
                  }}
                >
                  Approve
                </button>

                <button
                  type="button"
                  style={{ color: "blue" }}
                  className="btn btn-warning"
                  onClick={(e) => {
                    const info = {
                      status: "denied",
                    };

                    const reqOptions = {
                      method: "PUT",
                      //headers: { "content-type": "application/json" },
                      // body: JSON.stringify(info),
                    };

                    fetch(
                      "http://localhost:8080/denyuser/" + v.user_id,
                      reqOptions
                    )
                      .then((resp) => {
                        if (resp.ok) return resp.json();
                        else throw new Error("Server Error");
                      })
                      //.then((obj) => navigate(-1))
                      .then((obj) => {
                        fetch("http://localhost:8080/pendingusersforapproval")
                          .then((resp) => resp.json())
                          .then((data) => setUsers(data));
                      })
                      .catch((error) => alert("server error"));
                  }}
                >
                  Deny
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
