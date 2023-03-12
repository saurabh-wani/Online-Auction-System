import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

export default function ProductsPurchased() {
  const bidder_id = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  const [rating, setRating] = useState(0);
  const [rating1, setRating1] = useState(0);
  const [feedback, setFeedback] = useState("");
  // Catch Rating value

  const sendData = (e) => {
    e.preventDefault();
  };

  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };

  const handleRating1 = (rate: number) => {
    setRating1(rate);

    // other logic
  };

  // Optinal callback functions
  // const onPointerEnter = () => console.log("Enter");
  // const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  useEffect(() => {
    //navigate();
    fetch("http://localhost:8080/productspurchased/" + bidder_id)
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);

  const navigate = useNavigate();
  const [purchasedProducts, setProducts] = useState([]);

  return (
    <div>
      <h2 className="text-center" style={{ backgroundColor: "white" }}>
        Products Purchased
      </h2>
      <table className="table table-bordered">
        {purchasedProducts.map((v) => {
          if (v.feedback == null)
            return (
              <tr>
                <td>
                  {console.log(v.ps.bid_id.p_Id.product_name)}
                  Product Name: {v.ps.bid_id.p_Id.product_name}
                  <br />
                  Product Category: {v.ps.bid_id.p_Id.category_id.category_name}
                  <br />
                  Product Description: {v.ps.bid_id.p_Id.product_description}
                  <br />
                  Product Base Price(Rs.): {v.ps.bid_id.p_Id.base_price}
                  <br />
                  Product Purchased at(Rs.): {v.ps.final_bid_price}
                  <br />
                  Seller Name:{" "}
                  {v.ps.bid_id.p_Id.seller_id.fname +
                    " " +
                    v.ps.bid_id.p_Id.seller_id.lname}
                  <br />
                  Seller Mobile Number: {v.ps.bid_id.p_Id.seller_id.mobile}
                  <br />
                </td>
                <td>
                  <img
                    className="d-block"
                    src={`data:image/png;base64,${
                      v && v.ps.bid_id.p_Id.product_image_1
                    }`}
                    width="320"
                    height="230"
                    alt="Second slide"
                  />
                </td>
                <td>
                  Seller Rating:
                  <Rating
                    onClick={handleRating}
                    // onPointerEnter={onPointerEnter}
                    // onPointerLeave={onPointerLeave}
                    onPointerMove={onPointerMove}
                    /* Available Props */
                  />
                  <br />
                  Product Rating:
                  <Rating
                    onClick={handleRating1}
                    // onPointerEnter={onPointerEnter}
                    // onPointerLeave={onPointerLeave}
                    onPointerMove={onPointerMove}
                    /* Available Props */
                  />
                  <br />
                  Feedback:
                  <input
                    type="text"
                    name="feedback"
                    id="feedback"
                    cols="40"
                    rows="5"
                    style={{
                      width: "200px",
                      height: "100px",
                      border: "2px solid black",
                      borderRadius: "4px",
                    }}
                    onChange={(e) => {
                      setFeedback(e.target.value);
                      // console.log(rating);
                      // console.log(rating1);
                      // console.log(feedback);
                    }}
                  />
                  <button
                    type="button"
                    // style={(bidder_id==v.bidding_transaction_id.bidder_id)?{{ backgroundColor: "green" }}:{{ backgroundColor: "green" }}}
                    style={{
                      // disabled:
                      //   v.bidding_transaction_id != null
                      //     ? bidder_id === v.bidding_transaction_id.bidder_id
                      //       ? true
                      //       : false
                      //     : false,
                      backgroundColor: "green",
                    }}
                    onClick={(e) => {
                      var info = {
                        p_Id: v.ps.bid_id.p_Id,
                        seller_id: v.ps.bid_id.p_Id.seller_id,
                        bidder_id: v.ps.bid_id.bidder_id,
                        seller_rating: rating,
                        product_rating: rating1,
                        feedback_description: feedback,
                      };

                      const reqOptions = {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(info),
                      };

                      fetch("http://localhost:8080/submitfeedback", reqOptions)
                        .then((resp) => {
                          if (resp.ok) return resp.json();
                          else throw new Error("Server Error");
                        })
                        .then((obj) => {
                          fetch(
                            "http://localhost:8080/productspurchased/" +
                              bidder_id
                          )
                            .then((resp) => resp.json())
                            .then((data) => setProducts(data));
                        })
                        .catch((error) => alert("server error"));
                    }}
                    className="btn btn-success text-center"
                  >
                    Submit
                  </button>
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
                  {console.log(v.ps.bid_id.p_Id.product_name)}
                  Product Name: {v.ps.bid_id.p_Id.product_name}
                  <br />
                  Product Category: {v.ps.bid_id.p_Id.category_id.category_name}
                  <br />
                  Product Description: {v.ps.bid_id.p_Id.product_description}
                  <br />
                  Product Base Price(Rs.): {v.ps.bid_id.p_Id.base_price}
                  <br />
                  Product Purchased at(Rs.): {v.ps.final_bid_price}
                  <br />
                  Seller Name:{" "}
                  {v.ps.bid_id.p_Id.seller_id.fname +
                    " " +
                    v.ps.bid_id.p_Id.seller_id.lname}
                  <br />
                  Seller Mobile Number: {v.ps.bid_id.p_Id.seller_id.mobile}
                  <br />
                </td>
                <td>
                  <img
                    className="d-block"
                    src={`data:image/png;base64,${
                      v && v.ps.bid_id.p_Id.product_image_1
                    }`}
                    width="320"
                    height="230"
                    alt="Second slide"
                  />
                </td>
                <td>
                  <h6>Feedback Already Submitted...</h6>
                  <p>{v.feedback.feedback_description}</p>

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
