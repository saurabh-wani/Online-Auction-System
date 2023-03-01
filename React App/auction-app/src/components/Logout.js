import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./slice";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  localStorage.clear();
  dispatch(logout());
  navigate("/");
  return <div></div>;
}

export default Logout;
