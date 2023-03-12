import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHomeHome() {
  useEffect(() => {
    fetch("http://localhost:8080/getadminhome")
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
                Product Description:{v.p_Id.desciption}
                <br />
                Seller Name:{" "}
                {v.p_Id.seller_id.fname + " " + v.p_Id.seller_id.lname}
                <br />
                Base Price: {v.p_Id.base_price}
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
                Bidder Name: {v.bidder_id.fname + " " + v.bidder_id.lname}
                <br />
                Final Bid Price: {v.final_bid_price}
                <br />
                <p
                  style={{
                    color:
                      v.bidding_status === "Payment not done yet"
                        ? "red"
                        : "green",
                  }}
                >
                  {" "}
                  Payment status:{v.bidding_status}
                </p>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
