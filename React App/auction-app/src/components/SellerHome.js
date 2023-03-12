import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";

function SellerHome() {
  const [seller, setSeller] = useState(null);
  const user_id = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  useEffect(() => {
    fetch("http://localhost:8080/getUser?user_id=" + user_id)
      .then((resp) => resp.json())
      .then((obj) => {
        localStorage.setItem("loggedSeller", JSON.stringify(obj));
        setSeller(obj);
      });
  }, []);
  return (
    <div className="App App3">
      <header>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand>Auction App</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="home" className="nav-link px-3">
                Home
              </Link>
              <Link to="add_product" className="nav-link px-3">
                Add Product
              </Link>
              <Link to="approved_products" className="nav-link px-3">
                Approved Products
              </Link>
              <Link to="ongoing_auctions" className="nav-link px-3">
                Ongoing Auctions
              </Link>
              <Link to="products_sold" className="nav-link px-3">
                Products Sold
              </Link>
              {/* <Link to="feedback_seller" className="nav-link px-3">
                Feedback
              </Link> */}
              <Link to="/logout" className="nav-link px-3">
                Logout
              </Link>
            </Nav>
            <h3 style={{ color: "white" }}>
              Welcome {seller && seller.fname} {seller && seller.lname}
            </h3>
          </Container>
        </Navbar>
      </header>

      <Outlet />
    </div>
  );
}

export default SellerHome;
