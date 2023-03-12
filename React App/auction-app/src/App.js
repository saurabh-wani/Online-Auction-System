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
import store from "../src/components/store";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";
import PendingProductsForApproval from "./components/PendingProductsForApproval";
import PendingUsersForApproval from "./components/PendingUsersForApproval";
import SoldProducts from "./components/SoldProducts";
import OngoingAuctions from "./components/OngoingAuctions";
import AddProduct from "./components/AddProduct";
import OngoingAuctionsSeller from "./components/OngoingAuctionsSeller";
import ProductsSold from "./components/ProductsSold";
import FeedbackSeller from "./components/FeedbackSeller";
import Products from "./components/Products";
//import SignUp from "./components/SignUp";
import MyBids from "./components/MyBids";
import ProductsPurchased from "./components/ProductsPurchased";
import FeedbackBidder from "./components/FeedbackBidder";
import ApprovedProducts from "./components/ApprovedProducts";
import BidderRegistration from "./components/BidderRegistration";
import SellerRegistration from "./components/SellerRegistration";
import AdminHomeHome from "./components/AdminHomeHome";
import BidderHomeHome from "./components/BidderHomeHome";
import SellerHomeHome from "./components/SellerHomeHome";
import Password from "./components/ResetPwd";
import Forget from "./components/Forgot";

function App() {
  const mystate = useSelector((state) => state.logged);
  return (
    <div className="App">
      <header>
        <div style={{ display: mystate.loggedIn ? "none" : "block" }}>
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
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password" element={<Password />} />
          <Route path="/forgot" element={<Forget />} />
          <Route path="/signup" element={<Signup />}>
            <Route
              path="bidder_registration"
              element={<BidderRegistration />}
            />
            <Route
              path="seller_registration"
              element={<SellerRegistration />}
            />
          </Route>
          {/* <Route path="/admin_home" element={<AdminHome />}/> */}

          <Route path="/logout" element={<Logout />} />
          <Route path="/admin_home" element={<AdminHome />}>
            <Route path="home" element={<AdminHomeHome />} />
            <Route
              path="products_approval"
              element={<PendingProductsForApproval />}
            />
            <Route
              path="users_approval"
              element={<PendingUsersForApproval />}
            />
            <Route path="sold_products" element={<SoldProducts />} />
            <Route path="ongoing_auctions" element={<OngoingAuctions />} />
          </Route>
          <Route path="/seller_home" element={<SellerHome />}>
            <Route path="home" element={<SellerHomeHome />} />
            <Route path="add_product" element={<AddProduct />} />
            <Route
              path="ongoing_auctions"
              element={<OngoingAuctionsSeller />}
            />
            <Route path="approved_products" element={<ApprovedProducts />} />
            <Route path="products_sold" element={<ProductsSold />} />
            <Route path="feedback_seller" element={<FeedbackSeller />} />
          </Route>

          <Route path="/bidder_home" element={<BidderHome />}>
            <Route path="home" element={<BidderHomeHome />} />
            <Route path="products" element={<Products />} />
            <Route path="my_bids" element={<MyBids />} />
            <Route path="products_purchased" element={<ProductsPurchased />} />
            <Route path="feedback_bidder" element={<FeedbackBidder />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
