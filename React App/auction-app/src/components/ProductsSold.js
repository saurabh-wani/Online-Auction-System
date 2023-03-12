import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductsSold() {
  const seller_id = JSON.parse(localStorage.getItem("loggedUser")).user_id;

  useEffect(() => {
    //navigate();
    fetch("http://localhost:8080/productssoldseller/" + seller_id)
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);

  const navigate = useNavigate();
  const [productsSold, setProducts] = useState([]);
  return (
    <div>
      <h2 className="text-center" style={{ backgroundColor: "white" }}>
        Sold Products
      </h2>
      <table className="table table-bordered">
        {productsSold.map((v) => {
          if (v.feedback == null)
            return (
              <tr>
                <td>
                  {console.log(v.productSold.bid_id.p_Id.product_name)}
                  Product Name: {v.productSold.bid_id.p_Id.product_name}
                  <br />
                  Product Category:{" "}
                  {v.productSold.bid_id.p_Id.category_id.category_name}
                  <br />
                  Product Description: {v.productSold.bid_id.p_Id.description}
                  <br />
                  <br />
                  Product Base Price(Rs.):{" "}
                  {v.productSold.bid_id.p_Id.base_price}
                  <br />
                  Product Purchased at(Rs.):{" "}
                  {v.productSold.bid_id.final_bid_price}
                  <br />
                  Bidder Name:{" "}
                  {v.productSold.bid_id.bidder_id.fname +
                    " " +
                    v.productSold.bid_id.bidder_id.lname}
                  <br />
                  Bidder Mobile Number: {v.productSold.bid_id.bidder_id.mobile}
                  <br />
                </td>
                <td>
                  <img
                    className="d-block"
                    src={`data:image/png;base64,${
                      v && v.productSold.bid_id.p_Id.product_image_1
                    }`}
                    width="320"
                    height="230"
                    alt="Second slide"
                  />
                </td>
                <td>
                  Auction Start Date : {v.productSold.bid_id.p_Id.start_date}
                  <br />
                  Auction End Date : {v.productSold.bid_id.p_Id.end_date}
                  <br />
                  Feedback:
                  <h6> Feedback not given by bidder yet...</h6>
                  {/* <p>{rating}</p>
              <p>{rating1}</p>
              <p>{feedback}</p> */}
                </td>
              </tr>
            );
          else
            return (
              <tr>
                <td>
                  {console.log(v.productSold.bid_id.p_Id.product_name)}
                  Product Name: {v.productSold.bid_id.p_Id.product_name}
                  <br />
                  Product Category:{" "}
                  {v.productSold.bid_id.p_Id.category_id.category_name}
                  <br />
                  Product Description: {v.productSold.bid_id.p_Id.description}
                  <br />
                  <br />
                  Product Base Price(Rs.):{" "}
                  {v.productSold.bid_id.p_Id.base_price}
                  <br />
                  Product Purchased at(Rs.):{" "}
                  {v.productSold.bid_id.final_bid_price}
                  <br />
                  Bidder Name:{" "}
                  {v.productSold.bid_id.bidder_id.fname +
                    " " +
                    v.productSold.bid_id.bidder_id.lname}
                  <br />
                  Bidder Mobile Number: {v.productSold.bid_id.bidder_id.mobile}
                  <br />
                </td>
                <td>
                  <img
                    className="d-block"
                    src={`data:image/png;base64,${
                      v && v.productSold.bid_id.p_Id.product_image_1
                    }`}
                    width="320"
                    height="230"
                    alt="Second slide"
                  />
                </td>
                <td>
                  Auction Start Date : {v.productSold.bid_id.p_Id.start_date}
                  <br />
                  Auction End Date : {v.productSold.bid_id.p_Id.end_date}
                  <br />
                  Feedback:
                  <h6>{v.feedback.feedback_description}</h6>
                  {/* <p>{rating}</p>
              <p>{rating1}</p>
              <p>{feedback}</p> */}
                </td>
              </tr>
            );
        })}
      </table>
    </div>
  );
}
