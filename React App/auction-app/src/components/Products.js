import { useState, useEffect, useReducer } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export default function Products() {
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((resp) => resp.json())
      .then((data) => setProducts(data));
  }, []);

  const bidder_id = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  console.log(bidder_id);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  return (
    <div>
      <h2 className="text-center" style={{ backgroundColor: "white" }}>
        Products
      </h2>
      <table className="table table-bordered">
        {products.map((v) => {
          // else
          if (v.bidding_transaction_id == null)
            return (
              <tr>
                {/* {console.log(v.p_Id.p_Id)}
              {console.log(
                bidder_id + "==" + v.bidding_transaction_id.bidder_id.user_id
              )} */}
                <td>
                  <h3>Product Name : {v.p_Id.product_name}</h3>
                  <h4>Product Category : {v.p_Id.category_id.category_name}</h4>
                  <p>Description: {v.p_Id.description}</p>
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
                        width="400"
                        height="300"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block"
                        src={`data:image/png;base64,${
                          v && v.p_Id.product_image_2
                        }`}
                        width="400"
                        height="300"
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
                        width="400"
                        height="300"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </td>
                <td>
                  <p>Base Price: Rs. {v.p_Id.base_price}</p>
                  <h4>
                    Current Highest Bid:{" "}
                    {v.bidding_transaction_id == null ? (
                      "No Bids Placed Yet.Make the first Bid "
                    ) : (
                      <>
                        <h4>{v.bidding_transaction_id.bid_price}</h4>
                        <h4>
                          Highest Bidder Name:{" "}
                          {v.bidding_transaction_id.bidder_id.fname +
                            " " +
                            v.bidding_transaction_id.bidder_id.lname}
                        </h4>
                        <p>"Rs" + {v.bidding_transaction_id.bid_price}</p>
                      </>
                    )}
                  </h4>
                  <h4>
                    Next Bid Ammount(Rs.) :{" "}
                    {v.bidding_transaction_id == null
                      ? v.p_Id.base_price
                      : Math.round(1.02 * v.bidding_transaction_id.bid_price)}
                  </h4>
                  {/* <p>{bidder_id}</p> */}
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
                      // const info = {
                      //   status: "approved",
                      // };

                      const info = {
                        p_Id: v.p_Id.p_Id + "",
                        bidder_id: bidder_id,
                        bid_price:
                          v.bidding_transaction_id == null
                            ? v.p_Id.base_price
                            : Math.round(
                                1.02 * v.bidding_transaction_id.bid_price
                              ),
                      };

                      const reqOptions = {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(info),
                      };

                      console.log(v.p_Id.p_Id);
                      console.log(bidder_id);
                      console.log(
                        v.bidding_transaction_id == null
                          ? v.p_Id.base_price
                          : Math.round(
                              1.02 * v.bidding_transaction_id.bid_price
                            )
                      );

                      fetch(
                        "http://localhost:8080/bid/" + v.p_Id.p_Id,
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
                          fetch("http://localhost:8080/products")
                            .then((resp) => resp.json())
                            .then((data) => setProducts(data));
                        })
                        .catch((error) => alert("server error"));
                    }}
                    className="btn btn-success"
                  >
                    Bid
                  </button>
                </td>
              </tr>
            );
          else if (
            v.bidding_transaction_id != null &&
            bidder_id === v.bidding_transaction_id.bidder_id.user_id
          )
            return (
              <tr>
                {console.log(v.p_Id.p_Id)}
                {console.log(
                  bidder_id + "==" + v.bidding_transaction_id.bidder_id
                )}
                <td>
                  <h3>Product Name : {v.p_Id.product_name}</h3>
                  <h4>Product Category : {v.p_Id.category_id.category_name}</h4>
                  <p>Description: {v.p_Id.description}</p>
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
                        width="400"
                        height="300"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block"
                        src={`data:image/png;base64,${
                          v && v.p_Id.product_image_2
                        }`}
                        width="400"
                        height="300"
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
                        width="400"
                        height="300"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </td>
                <td>
                  <p>Base Price: Rs. {v.p_Id.base_price}</p>
                  <h4>
                    Current Highest Bid:{" "}
                    {v.bidding_transaction_id == null ? (
                      "No Bids Placed Yet.Make the first Bid "
                    ) : (
                      <>
                        <h4>{v.bidding_transaction_id.bid_price}</h4>
                        <h4>
                          Highest Bidder Name:{" "}
                          {v.bidding_transaction_id.bidder_id.fname +
                            " " +
                            v.bidding_transaction_id.bidder_id.lname}
                        </h4>
                        <p>"Rs" + {v.bidding_transaction_id.bid_price}</p>
                      </>
                    )}
                  </h4>
                  <h4>
                    Next Bid Ammount(Rs.) :{" "}
                    {v.bidding_transaction_id == null
                      ? v.p_Id.base_price
                      : Math.round(1.02 * v.bidding_transaction_id.bid_price)}
                  </h4>
                </td>
              </tr>
            );
          else
            return (
              <tr>
                {/* {console.log(v.p_Id.p_Id)}
              {console.log(
                bidder_id + "==" + v.bidding_transaction_id.bidder_id.user_id
              )} */}
                <td>
                  <h3>Product Name : {v.p_Id.product_name}</h3>
                  <h4>Product Category : {v.p_Id.category_id.category_name}</h4>
                  <p>Description: {v.p_Id.description}</p>
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
                        width="400"
                        height="300"
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block"
                        src={`data:image/png;base64,${
                          v && v.p_Id.product_image_2
                        }`}
                        width="400"
                        height="300"
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
                        width="400"
                        height="300"
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </td>
                <td>
                  <p>Base Price: Rs. {v.p_Id.base_price}</p>
                  <h4>
                    Current Highest Bid:{" "}
                    {v.bidding_transaction_id == null ? (
                      "No Bids Placed Yet.Make the first Bid "
                    ) : (
                      <>
                        <h4>{v.bidding_transaction_id.bid_price}</h4>
                        <h4>
                          Highest Bidder Name:{" "}
                          {v.bidding_transaction_id.bidder_id.fname +
                            " " +
                            v.bidding_transaction_id.bidder_id.lname}
                        </h4>
                        <p>"Rs" + {v.bidding_transaction_id.bid_price}</p>
                      </>
                    )}
                  </h4>
                  <h4>
                    Next Bid Ammount(Rs.) :{" "}
                    {v.bidding_transaction_id == null
                      ? v.p_Id.base_price
                      : Math.round(1.02 * v.bidding_transaction_id.bid_price)}
                  </h4>
                  {/* <p>{bidder_id}</p> */}
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
                      // const info = {
                      //   status: "approved",
                      // };

                      const info = {
                        p_Id: v.p_Id.p_Id + "",
                        bidder_id: bidder_id,
                        bid_price:
                          v.bidding_transaction_id == null
                            ? v.p_Id.base_price
                            : Math.round(
                                1.02 * v.bidding_transaction_id.bid_price
                              ),
                      };

                      const reqOptions = {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify(info),
                      };

                      console.log(v.p_Id.p_Id);
                      console.log(bidder_id);
                      console.log(
                        v.bidding_transaction_id == null
                          ? v.p_Id.base_price
                          : Math.round(
                              1.02 * v.bidding_transaction_id.bid_price
                            )
                      );

                      fetch(
                        "http://localhost:8080/bid/" + v.p_Id.p_Id,
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
                          fetch("http://localhost:8080/products")
                            .then((resp) => resp.json())
                            .then((data) => setProducts(data));
                        })
                        .catch((error) => alert("server error"));
                    }}
                    className="btn btn-success"
                  >
                    Bid
                  </button>
                </td>
              </tr>
            );
        })}
      </table>
    </div>
  );
}
