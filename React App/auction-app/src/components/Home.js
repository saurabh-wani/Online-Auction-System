import { Link, useNavigate } from "react-router-dom";

function Home() {
  return (
    <div className="App2" style={{ alignItems: "center", color: "white" }}>
      <br />
      <br />
      <br />
      <div
        style={{
          backgroundColor: "gray",
          opacity: 0.6,
          width: "50%",
          padding: "30px",
          marginLeft: "35px",
        }}
      >
        <h1 style={{ padding: "20px" }}>
          Bid, Win, Repeat - Your go-to destination for online auctions.
        </h1>
        <h3>You can Register as Seller as well as bidder.</h3>
        <h3>
          Now you can bid on your favourite products which are available for
          auction.
        </h3>
        <br />
        <h4>Highest bidder at the end of auction will get the product.</h4>
        <br />
        <h4>
          <Link
            to="/login"
            style={{ backgroundColor: "blue", padding: "10px", margin: "10px" }}
          >
            Login
          </Link>
          {/* <Link
            to="/signup"
            style={{ backgroundColor: "blue", padding: "10px", margin: "10px" }}
          >
            Sign Up
          </Link> */}
        </h4>
        {/* <img
          src="../images/gavel-gd01210879_640.jpg"
          alt="something"
          width="200"
          height="200"
        />
        <img
          src="../images/auction-g4a49c364e_640.jpg"
          alt="Girl in a jacket"
          width="500"
          height="600"
        ></img> */}
      </div>
    </div>
  );
}

export default Home;
