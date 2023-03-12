import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyBids() {
  const user_id = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  const bidder_id = user_id;
  useEffect(() => {
    fetch("http://localhost:8080/mybids/" + user_id)
      .then((resp) => resp.json())
      .then((data) => setBiddings(data));
  }, []);

  const navigate = useNavigate();
  const [biddings, setBiddings] = useState([]);
  return (
    <div>
      <h2 className="text-center" style={{ backgroundColor: "white" }}>
        My Bids
      </h2>
      <table className="table table-bordered">
        {biddings.map((v) => {
          if (v.bt.bid_price === v.highest_bid_price)
            return (
              <tr>
                <td>
                  Product Name: {v.bt.p_Id.product_name}
                  <br />
                  Product Category: {v.bt.p_Id.category_id.category_name}
                  <br />
                  Auction End Date: {v.bt.p_Id.end_date}
                  <br />
                  Your Bidding(Rs.): {v.bt.bid_price}
                </td>
                <td>
                  <img
                    className="d-block"
                    src={`data:image/png;base64,${
                      v && v.bt.p_Id.product_image_1
                    }`}
                    width="250"
                    height="180"
                    alt="First"
                  />
                </td>
                <td>
                  <h6>Currently you are highest bidder for this product</h6>
                  <br />
                  Highest Bidding(Rs.): {v.highest_bid_price}
                </td>
              </tr>
            );
          else
            return (
              <tr>
                <td>
                  Product Name: {v.bt.p_Id.product_name}
                  <br />
                  Product Category: {v.bt.p_Id.category_id.category_name}
                  <br />
                  Auction End Date: {v.bt.p_Id.end_date}
                </td>
                <td>
                  <img
                    className="d-block"
                    src={`data:image/png;base64,${
                      v && v.bt.p_Id.product_image_1
                    }`}
                    width="250"
                    height="180"
                    alt="First"
                  />
                </td>
                <td>
                  <br />
                  Your Bidding(Rs.): {v.bt.bid_price}
                  <br />
                  Highest Bidding(Rs.): {v.highest_bid_price}
                  <br />
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
                    // onClick={(e) => {
                    //   // const reqOptions = {
                    //   //   method: "POST",
                    //   // };

                    //   console.log(v.p_Id.p_Id);
                    //   console.log(bidder_id);
                    //   console.log(
                    //     v.bidding_transaction_id == null
                    //       ? v.p_Id.base_price
                    //       : Math.round(1.02 * v.bidding_transaction_id.bid_price)
                    //   );
                    //   fetch(
                    //     "http://localhost:8080/bid?p_id=${v.p_Id.p_Id}&b_id=${bidder_id}&b_price=${(v.bidding_transaction_id == null? v.p_Id.base_price: Math.round(1.02 * v.bidding_transaction_id.bid_price)}"
                    //   )
                    //     .then((resp) => {
                    //       if (resp.ok) return resp.json();
                    //       else throw new Error("Server Error");
                    //     })
                    //     .then((obj) => {
                    //       fetch("http://localhost:8080/products")
                    //         .then((resp) => resp.json())
                    //         .then((data) => setProducts(data));
                    //     })
                    //     .catch((error) => alert("server error"));

                    // fetch(
                    //   "http://localhost:8080/bid/" +
                    //     v.p_Id.p_Id +
                    //     "/" +
                    //     { bidder_id } +
                    //     "/" +
                    //     (v.bidding_transaction_id == null)
                    //     ? v.p_Id.base_price
                    //     : Math.round(1.02 * v.bidding_transaction_id.bid_price),
                    //   reqOptions
                    // )
                    //   .then((resp) => {
                    //     if (resp.ok) return resp.json();
                    //     // else throw new Error("Server Error");
                    //   })
                    //   .then((obj) => {
                    //     fetch("http://localhost:8080/products")
                    //       .then((resp) => resp.json())
                    //       .then((data) => setProducts(data));
                    //   });
                    //}}
                    onClick={(e) => {
                      const info = {
                        p_Id: v.bt.p_Id.p_Id + "",
                        bidder_id: bidder_id,
                        bid_price: Math.round(v.highest_bid_price * 1.02),
                      };

                      const reqOptions = {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(info),
                      };

                      fetch(
                        "http://localhost:8080/bid/" + v.bt.p_Id.p_Id,
                        // v.p_Id.p_Id +
                        // "/" +
                        // bidder_id +
                        // "/" +
                        // (v.bidding_transaction_id == null)
                        // ? v.p_Id.base_price
                        // : Math.round(1.02 * v.bidding_transaction_id.bid_price),
                        reqOptions
                      )
                        .then((resp) => {
                          if (resp.ok) return resp.json();
                          else throw new Error("Server Error");
                        })
                        .then((obj) => {
                          fetch("http://localhost:8080/mybids/" + user_id)
                            .then((resp) => resp.json())
                            .then((data) => setBiddings(data));
                        })
                        .catch((error) => alert("server error"));
                    }}
                    className="btn btn-success text-center"
                  >
                    Bid
                  </button>
                  <br />
                  Next Bid Price(Rs.):{Math.round(v.highest_bid_price * 1.02)}
                </td>
              </tr>
            );
        })}
      </table>
    </div>
  );
}
