import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import BidderHomeHome from "./BidderHomeHome";

function BidderHome() {
  const [bidder, setBidder] = useState(null);
  const user_id = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  useEffect(() => {
    fetch("http://localhost:8080/getUser?user_id=" + user_id)
      .then((resp) => resp.json())
      .then((obj) => {
        localStorage.setItem("loggedBidder", JSON.stringify(obj));
        setBidder(obj);
      });
  }, []);
  return (
    <div className="App4">
      <header>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand>Auction App</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="home" className="nav-link px-3">
                Home
              </Link>
              <Link to="products" className="nav-link px-3">
                Products
              </Link>
              <Link to="my_bids" className="nav-link px-3">
                My Bids
              </Link>
              <Link to="products_purchased" className="nav-link px-3">
                Products Purchased
              </Link>
              {/* <Link to="feedback_bidder" className="nav-link px-3">
                Feedback
              </Link> */}
              <Link to="/logout" className="nav-link px-3">
                Logout
              </Link>
            </Nav>
            <h3 style={{ color: "white" }}>
              Welcome {bidder && bidder.fname} {bidder && bidder.lname}
            </h3>
          </Container>
        </Navbar>
      </header>

      <Outlet />
      {/* <BidderHomeHome /> */}
    </div>
  );
}

export default BidderHome;
