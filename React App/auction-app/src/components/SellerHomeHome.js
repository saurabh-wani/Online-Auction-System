import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SellerHomeHome() {
  const user_id = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  useEffect(() => {
    fetch("http://localhost:8080/getsellerhome/" + user_id)
      .then((resp) => resp.json())
      .then((data) => setBiddings(data));
  }, []);
  const navigate = useNavigate();
  const [biddings, setBiddings] = useState([]);

  return (
    <div>
      {/* <p>{biddings}</p> */}
      <h1 className="text-center" style={{ backgroundColor: "white" }}>
        {" "}
        Auctions Ended
      </h1>
      <table className="table table-bordered">
        {biddings.map((v) => {
          return (
            <tr>
              <td>
                Product Name:{v.p_Id.product_name}
                <br />
                Product Name:{v.p_Id.category_id.category_name}
                <br />
                Product Description:{v.p_Id.description}
                <br />
                Base Price: {v.p_Id.base_price}
                <br />
                Final Bid Price: {v.final_bid_price}
                <br />
              </td>
              <td width={280} height={200}>
                <img
                  className="d-block"
                  src={`data:image/png;base64,${v && v.p_Id.product_image_3}`}
                  width="280"
                  height="200"
                  alt="Third slide"
                />
              </td>
              <td>
                {/* Bidder Name: {v.bidder_id.fname + " " + v.bidder_id.lname}
                <br /> */}
                Bidder Name: {v.bidder_id.fname + " " + v.bidder_id.lname}
                <br />
                Bidder Address:{" "}
                {v.bidder_id.address +
                  ", " +
                  v.bidder_id.city +
                  " : " +
                  v.bidder_id.pincode +
                  ", " +
                  v.bidder_id.state}
                <br />
                Bidder Mobile Number: {v.bidder_id.mobile}
                <h6
                  style={{
                    color:
                      v.bidding_status === "payment done" ? "green" : "grey",
                  }}
                >
                  Payment status:
                  {v.bidding_status === "payment done"
                    ? " Payment Done"
                    : " " + v.bidding_status}
                </h6>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
