import { useState, useEffect, useReducer } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export default function OngoingAuctionsSeller() {
  const seller_id = JSON.parse(localStorage.getItem("loggedUser")).user_id;

  useEffect(() => {
    fetch("http://localhost:8080/ongoingauctionforseller/" + seller_id)
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  return (
    <div>
      <h2 className="text-center" style={{ backgroundColor: "white" }}>
        Ongoing Auctions
      </h2>
      <table className="table table-bordered">
        {products.map((v) => {
          return (
            <tr>
              {console.log(v.p_Id.p_Id)}
              <td>
                <h3>Product Name:{v.p_Id.product_name}</h3>
                <h4>Category : {v.p_Id.category_id.category_name}</h4>
                <p>Description : {v.p_Id.description}</p>
                <p>Base Price: Rs. {v.p_Id.base_price}</p>
              </td>
              <td width={400} height={350}>
                {/* <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        // class="d-block w-100"
                        src={`data:image/png;base64,${
                          v && v.p_Id.product_image_1
                        }`}
                        alt="First slide"
                        width="400"
                        height="325"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        // class="d-block w-100"
                        src={`data:image/png;base64,${
                          v && v.p_Id.product_image_2
                        }`}
                        width="400"
                        height="325"
                        alt="Second slide"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        // class="d-block w-100"
                        src={`data:image/png;base64,${
                          v && v.p_Id.product_image_3
                        }`}
                        width="400"
                        height="325"
                        alt="Third slide"
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div> */}
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src={`data:image/png;base64,${
                        v && v.p_Id.product_image_1
                      }`}
                      width="340"
                      height="270"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src={`data:image/png;base64,${
                        v && v.p_Id.product_image_2
                      }`}
                      width="340"
                      height="270"
                      alt="Second slide"
                    />
                    {/* 
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src={`data:image/png;base64,${
                        v && v.p_Id.product_image_3
                      }`}
                      width="340"
                      height="270"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </td>
              <td>
                <h6>
                  Current Highest Bid(Rs.):{" "}
                  {v.bidding_transaction_id == null ? (
                    "No Bids Placed Yet."
                  ) : (
                    <>
                      <h6>{v.bidding_transaction_id.bid_price}</h6>
                      <h6>
                        Highest Bidder Name:{" "}
                        {v.bidding_transaction_id.bidder_id.fname +
                          " " +
                          v.bidding_transaction_id.bidder_id.lname}
                      </h6>
                      <p>
                        Rs. {Math.round(v.bidding_transaction_id.bid_price)}
                      </p>
                    </>
                  )}
                </h6>
                <h6>
                  Next Bid Ammount(Rs.) :{" "}
                  {Math.round(
                    v.bidding_transaction_id == null
                      ? v.p_Id.base_price
                      : 1.02 * v.bidding_transaction_id.bid_price
                  )}
                </h6>
                {/* <p>{bidder_id}</p> */}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
