import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ApprovedProducts() {
  const seller_id = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  useEffect(() => {
    //navigate();
    fetch("http://localhost:8080/approvedproducts/" + seller_id)
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);

  const navigate = useNavigate();
  const [approvedproducts, setProducts] = useState([]);
  const [s_date, setStart_date] = useState("");
  const [e_date, setEnd_date] = useState("");
  const [pId, setP_Id] = useState(0);
  // var start_date;
  // var end_date;
  var info = {
    p_Id: pId,
    start_date: s_date,
    end_date: e_date,
  };

  const sendData = (e) => {
    e.preventDefault();

    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    };

    fetch("http://localhost:8080/startauction/", reqOptions)
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error("Server Error");
      })
      .then((obj) => {
        fetch("http://localhost:8080/approvedproducts/" + seller_id)
          .then((resp) => resp.json())
          .then((data) => setProducts(data));
      })
      .catch((error) => alert("server error"));
  };

  return (
    <div>
      {/* {approvedproducts.map((v) => {
        return <p>{v}</p>;
      })} */}
      <h1 className="text-center" style={{ backgroundColor: "white" }}>
        {" "}
        Approved Products
      </h1>
      <table className="table table-bordered">
        {approvedproducts.map((v) => {
          // var start_date="2023-03-09";
          // var end_date="2023-03-09";
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
                  name="f1"
                  // action="http://localhost:8080/startauction/"
                  // method="Post"
                >
                  <input type="hidden" name="P_Id" value={v.p_Id + ""} />
                  <div className="form-group mt-3">
                    <label htmlFor="start_date">Start Date</label>
                    <input
                      type="date"
                      name="start_date"
                      id="start_date"
                      className="form-control mt-1"
                      onChange={(e) => {
                        setStart_date(e.target.value);
                        setP_Id(v.p_Id);
                        console.log(s_date);
                      }}
                    />
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="start_date">End Date</label>
                    <input
                      type="date"
                      name="end_date"
                      id="end_date"
                      className="form-control mt-1"
                      onChange={(e) => {
                        setEnd_date(e.target.value);
                        setP_Id(v.p_Id);
                        console.log(e_date);
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success text-center"
                    onClick={(e) => {
                      sendData(e);
                      setP_Id(v.p_Id);
                    }}
                  >
                    Submit
                  </button>

                  {/* <p>{pId + " " + s_date + " " + e_date}</p> */}
                  {/* <p>{console.log(start_date)}</p> */}
                  {/* <p>{JSON.stringify(info)}</p> */}
                </form>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ApprovedProducts;
