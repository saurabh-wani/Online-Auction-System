import logo from "./logo.svg";
import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import AdminHome from "./components/AdminHome";
import SellerHome from "./components/SellerHome";
import BidderHome from "./components/BidderHome";
import Signup from "./components/Signup";
//import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Auction App</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="login">LogIn</Nav.Link>
              <Nav.Link href="signup">SignUp</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin_home" element={<AdminHome />} />
          <Route path="/seller_home" element={<SellerHome />} />
          <Route path="/bidder_home" element={<BidderHome />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
