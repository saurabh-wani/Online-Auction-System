import { Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
// import Logout from "./Logout";
// import PendingProductsForApproval from "./PendingProductsForApproval";
// import PendingUsersForApproval from "./PendingUsersForApproval";
// import SoldProducts from "./SoldProducts";
// import OngoingAuctions from "./OngoingAuctions";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  useEffect(() => {
    const user_id = JSON.parse(localStorage.getItem("loggedUser")).user_id;

    fetch("http://localhost:8080/getUser?user_id=" + user_id)
      .then((resp) => resp.json())
      .then((obj) => {
        localStorage.setItem("loggedAdmin", JSON.stringify(obj));
        setAdmin(obj);
      });
  }, []);

  return (
    <div className="App App5">
      <header>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Auction App</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="home" className="nav-link px-3">
                Home
              </Link>
              <Link to="products_approval" className="nav-link px-3">
                Products Approval
              </Link>
              <Link to="users_approval" className="nav-link px-3">
                Users Approval
              </Link>
              <Link to="sold_products" className="nav-link px-3">
                Sold Products
              </Link>
              <Link to="ongoing_auctions" className="nav-link px-3">
                Ongoing Auctions
              </Link>
              <Link to="/logout" className="nav-link px-3">
                Logout
              </Link>
            </Nav>
            <h3 style={{ color: "white" }}>
              Welcome {admin && admin.fname} {admin && admin.lname}
            </h3>
          </Container>
        </Navbar>
      </header>

      <Outlet />
      {/* {navigate("home")} */}
    </div>
  );
}
export default AdminHome;
