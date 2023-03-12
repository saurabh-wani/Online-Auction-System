import { useState, useEffect, useReducer } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function PendingProductsForApproval() {
  useEffect(() => {
    fetch("http://localhost:8080/pendingproductsforapproval")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  return (
    <div>
      <h1 className="text-center" style={{ backgroundColor: "white" }}>
        {" "}
        Pending Products for Approval{" "}
      </h1>
      <table className="table table-bordered">
        {products.map((v) => {
          return (
            <tr>
              <td>
                Product Name: {v.product_name}
                <br />
                Product Description: {v.description}
                <br />
                Product Category: {v.category_id.category_name}
                <br />
                BasePrice : ₹ {v.base_price}
                <br />
                Seller Name: {v.seller_id.fname + " " + v.seller_id.lname}
              </td>
              <td>
                <img
                  src={`data:image/png;base64,${v && v.product_image_1}`}
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
                      "http://localhost:8080/approveproduct/" + v.p_Id,
                      reqOptions
                    )
                      .then((resp) => {
                        if (resp.ok) return resp.json();
                        else throw new Error("Server Error");
                      })
                      .then((obj) => {
                        fetch(
                          "http://localhost:8080/pendingproductsforapproval"
                        )
                          .then((resp) => resp.json())
                          .then((data) => setProducts(data));
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
                      "http://localhost:8080/denyproduct/" + v.p_Id,
                      reqOptions
                    )
                      .then((resp) => {
                        if (resp.ok) return resp.json();
                        else throw new Error("Server Error");
                      })
                      //.then((obj) => navigate(-1))
                      .then((obj) => {
                        fetch(
                          "http://localhost:8080/pendingproductsforapproval"
                        )
                          .then((resp) => resp.json())
                          .then((data) => setProducts(data));
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

export default PendingProductsForApproval;
