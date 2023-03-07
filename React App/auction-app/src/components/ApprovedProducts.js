import { useState, useEffect, useReducer } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function ApprovedProducts() {
  const seller_id = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  useEffect(() => {
    //navigate();
    fetch("http://localhost:8080/approvedproducts/" + seller_id)
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);

  const navigate = useNavigate();
  const [approvedproducts, setProducts] = useState([]);

  return (
    <div>
      {/* {approvedproducts.map((v) => {
        return <p>{v}</p>;
      })} */}
      <h1> Approved Products</h1>
      <table className="table table-bordered">
        {approvedproducts.map((v) => {
          return (
            //const [info, dispatch] = useReducer(reducer, init);
            // const init={
            //   P_Id: "",
            //   start_date: "",
            //   end_date: "",
            // }
            <tr>
              <td>
                Product Name: {v.product_name}
                <br />
                Category: {v.category_id.category_name}
                <br />
                Description: {v.description}
                <br />
                Base Price: {v.base_price}
                <br />
              </td>
              <td>
                <img
                  src={`data:image/png;base64,${v && v.product_image_1}`}
                  width="300"
                  height="250"
                />
              </td>
              <td>
                <form
                  action="http://localhost:8080/startauction/"
                  method="Post"
                >
                  <input type="hidden" name="P_Id" value={v.p_Id + ""} />
                  <div className="form-group mt-3">
                    <label htmlFor="start_date">Start Date</label>
                    <input
                      type="date"
                      name="start_date"
                      id="start_date"
                      className="form-control mt-1"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="start_date">End Date</label>
                    <input
                      type="date"
                      name="end_date"
                      id="end_date"
                      className="form-control mt-1"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success text-center"
                    onSubmit={(e) => {
                      fetch(
                        "http://localhost:8080/approvedproducts/" + seller_id
                      )
                        .then((resp) => resp.json())
                        .then((data) => setProducts(data));
                    }}
                  >
                    Submit
                  </button>
                </form>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
