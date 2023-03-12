import { Link, Outlet } from "react-router-dom";
import { useReducer, useState } from "react";
// const init = {
//   fname: { value: "", hasError: true, touched: false, error: "" },
//   lname: { value: "", hasError: true, touched: false, error: "" },
//   email: { value: "", hasError: true, touched: false, error: "" },
//   mobile: { value: "", hasError: true, touched: false, error: "" },
//   state: { value: "", hasError: true, touched: false, error: "" },
//   city: { value: "", hasError: true, touched: false, error: "" },
//   pincode: { value: "", hasError: true, touched: false, error: "" },
//   address: { value: "", hasError: true, touched: false, error: "" },
//   pancard: { value: "", hasError: true, touched: false, error: "" },
//   answer: { value: "", hasError: true, touched: false, error: "" },
//   username: { value: "", hasError: true, touched: false, error: "" },
//   password: { value: "", hasError: true, touched: false, error: "" },

//   isFormValid: false,
// };

// const init1 = {
//   user_type_id:"",
//   fname: "",
//   lname: "",
//   email: "",
//   mobile: "",
//   state: "",
//   city: "",
//   pincode: "",
//   address: "",
//   gender:"",
//   pancard_card_number: "",
//   account_status:"",
//   q_id:0,
//   answer: "",
//   username: "",
//   password: "",
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "update": {
//       const { username, value, hasError, error, touched, isFormValid } =
//         action.data;
//       return {
//         ...state,
//         [username]: { username, value, hasError, error, touched },
//         isFormValid,
//       };
//     }
//     case "reset": {
//       return init;
//     }
//   }
// };
// function Signup() {
//   const [info, dispatch] = useReducer(reducer, init);
//   const [file, setFile] = useState();

//   const onInputChange = (username, value) => {
//     const { hasError, error } = validateData(username, value);
//     let isFormValid = true;

//     for (const key in info) {
//       const item = info[key];
//       if (info[key].hasError === true) {
//         isFormValid = false;
//         break;
//       }
//     }
//     dispatch({
//       type: "update",
//       data: { username, value, hasError, error, touched: true, isFormValid },
//     });
//   };

//   const validateData = (name, value) => {
//     let hasError = false;
//     let error = "";
//     switch (name) {
//       case "fname":
//         let regex2 = /^[A-Za-z0-9!@#$%^&*]{2,16}$/;

//         if (!regex2.test(value)) {
//           hasError = true;
//           error = "Fname should contain atleast 2 character";
//         }

//         break;

//       case "lname":
//         let regex3 = /^[A-Za-z0-9!@#$%^&*]{2,16}$/;

//         if (!regex3.test(value)) {
//           hasError = true;
//           error = "Lname should contain atleast 2 character";
//         }

//         break;

//       case "email":
//         let regex4 = /.+\@.+\..+/;

//         if (!regex4.test(value)) {
//           hasError = true;
//           error = "email should contain @ and . symbol";
//         }
//         break;

//       case "mobile":
//         let regex5 = /^[0-9]{10}$/;

//         if (!regex5.test(value)) {
//           hasError = true;
//           error = "It should contain only 10 digit";
//         }
//         break;

//       case "pincode":
//         let regex6 = /^[0-9]{6}$/;

//         if (!regex6.test(value)) {
//           hasError = true;
//           error = "it should contain 6 digit only ";
//         }
//         break;

//       case "pancard":
//         let regex7 = /^[A-Z0-9]{10}$/;

//         if (!regex7.test(value)) {
//           hasError = true;
//           error = "it should contain only capital and 10 digit only ";
//         }

//         break;

//       case "username":
//         let regex8 = /^[A-Za-z0-9!@#$%^&*]{4,16}$/;

//         if (!regex8.test(value)) {
//           hasError = true;
//           error = "username should be 4-15 characters long";
//         }

//         break;
//       case "password":
//         let regex9 =
//           /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

//         if (!regex9.test(value)) {
//           hasError = true;
//           error =
//             "Minimum eight characters, at least one letter, one number and one special character";
//         }
//     }

//     return { hasError, error };
//   };
function Signup() {
  return (
    <div className="Auth-form-container App2">
      <header
        style={{
          backgroundColor: "white",
          // backgroundImage: "url('../images/gavel-gd01210879_640.jpg')",
          // /* text-align: center; */
          // backgroundAttachment: "fixed",
          // /* Full height */
          // height: "100vh",

          // /* Center and scale the image nicely */
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",

          // width: "100%",
        }}
      >
        <h3 className="text-center">You can Register as Seller or Bidder</h3>
        <h4 className="text-center">
          <Link to="bidder_registration" className="link px-3">
            Register as Bidder
          </Link>
          <Link to="seller_registration" className="link px-3">
            Register as Seller
          </Link>
        </h4>
        <Outlet />
      </header>
    </div>
  );
}
// <div className="Auth-form-container">
//   <form className="Auth-form">
//     <div className="Auth-form-content">
//       <h3 className="Auth-form-title">Sign In</h3>
//       <div className="text-center">
//         Already registered?
//         <Link to="/login">Sign In</Link>
//       </div>
//       <table>
//         <tr>
//           <td>
//             {/* <br/>
//             <br/>
//             <br/> */}
//             <div className="form-group mt-3">
//               <label>User Type</label>
//               <select
//                 name="user_type_id"
//                 id="user_type_id"
//                 className="form-control mt-1"
//                 placeholder="Enter First Name"
//               >
//                 <option value="">Select Account Type</option>
//                 <option value="2">Seller</option>
//                 <option value="3">Bidder</option>
//               </select>
//             </div>

//             <div className="form-group mt-3">
//               <label>Fname</label>
//               <input
//                 type="text"
//                 name="fname"
//                 id="fname"
//                 value={info.fname.value}
//                 onChange={(e) => {
//                   onInputChange("fname", e.target.value);
//                 }}
//                 className="form-control mt-1"
//                 placeholder="Enter Fname"
//               />
//               <p
//                 style={{
//                   display:
//                     info.fname.touched && info.fname.hasError
//                       ? "block"
//                       : "none",
//                   color: "red",
//                 }}
//               >
//                 {info.fname.error}{" "}
//               </p>
//             </div>

//             <div className="form-group mt-3">
//               <label>Lname</label>
//               <input
//                 type="text"
//                 name="lname"
//                 id="lname"
//                 value={info.lname.value}
//                 onChange={(e) => {
//                   onInputChange("lname", e.target.value);
//                 }}
//                 className="form-control mt-1"
//                 placeholder="Enter Last Name"
//               />
//               <p
//                 style={{
//                   display:
//                     info.lname.touched && info.lname.hasError
//                       ? "block"
//                       : "none",
//                   color: "red",
//                 }}
//               >
//                 {info.lname.error}{" "}
//               </p>
//             </div>
//             <div className="form-group mt-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={info.email.value}
//                 onChange={(e) => {
//                   onInputChange("email", e.target.value);
//                 }}
//                 className="form-control mt-1"
//                 placeholder="Email Address"
//               />
//               <p
//                 style={{
//                   display:
//                     info.email.touched && info.email.hasError
//                       ? "block"
//                       : "none",
//                   color: "red",
//                 }}
//               >
//                 {info.email.error}{" "}
//               </p>
//             </div>
//             <div className="form-group mt-3">
//               <label>Mobile </label>
//               <input
//                 type="text"
//                 id="mobile"
//                 value={info.mobile.value}
//                 onChange={(e) => {
//                   onInputChange("mobile", e.target.value);
//                 }}
//                 className="form-control mt-1"
//                 placeholder="Enter Mobile Number"
//               />
//               <p
//                 style={{
//                   display:
//                     info.mobile.touched && info.mobile.hasError
//                       ? "block"
//                       : "none",
//                   color: "red",
//                 }}
//               >
//                 {info.mobile.error}{" "}
//               </p>
//             </div>

//             <div className="form-group mt-3">
//               <label>State</label>
//               <select
//                 name="State"
//                 id="State"
//                 className="form-control mt-1"
//                 onChange={(e) => {
//                   onInputChange("state", e.target.value);
//                 }}
//               >
//                 <option value="Andhra Pradesh">Andhra Pradesh</option>
//                 <option value="Andaman and Nicobar Islands">
//                   Andaman and Nicobar Islands
//                 </option>
//                 <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//                 <option value="Assam">Assam</option>
//                 <option value="Bihar">Bihar</option>
//                 <option value="Chandigarh">Chandigarh</option>
//                 <option value="Chhattisgarh">Chhattisgarh</option>
//                 <option value="Dadar and Nagar Haveli">
//                   Dadar and Nagar Haveli
//                 </option>
//                 <option value="Daman and Diu">Daman and Diu</option>
//                 <option value="Delhi">Delhi</option>
//                 <option value="Lakshadweep">Lakshadweep</option>
//                 <option value="Puducherry">Puducherry</option>
//                 <option value="Goa">Goa</option>
//                 <option value="Gujarat">Gujarat</option>
//                 <option value="Haryana">Haryana</option>
//                 <option value="Himachal Pradesh">Himachal Pradesh</option>
//                 <option value="Jammu and Kashmir">Jammu and Kashmir</option>
//                 <option value="Jharkhand">Jharkhand</option>
//                 <option value="Karnataka">Karnataka</option>
//                 <option value="Kerala">Kerala</option>
//                 <option value="Madhya Pradesh">Madhya Pradesh</option>
//                 <option value="Maharashtra">Maharashtra</option>
//                 <option value="Manipur">Manipur</option>
//                 <option value="Meghalaya">Meghalaya</option>
//                 <option value="Mizoram">Mizoram</option>
//                 <option value="Nagaland">Nagaland</option>
//                 <option value="Odisha">Odisha</option>
//                 <option value="Punjab">Punjab</option>
//                 <option value="Rajasthan">Rajasthan</option>
//                 <option value="Sikkim">Sikkim</option>
//                 <option value="Tamil Nadu">Tamil Nadu</option>
//                 <option value="Telangana">Telangana</option>
//                 <option value="Tripura">Tripura</option>
//                 <option value="Uttar Pradesh">Uttar Pradesh</option>
//                 <option value="Uttarakhand">Uttarakhand</option>
//                 <option value="West Bengal">West Bengal</option>
//               </select>
//               <p
//                 style={{
//                   display:
//                     info.state.touched && info.state.hasError
//                       ? "block"
//                       : "none",
//                   color: "red",
//                 }}
//               >
//                 {info.state.error}{" "}
//               </p>
//             </div>
//             <div className="form-group mt-3">
//               <label>City</label>
//               <input
//                 type="text"
//                 id="city"
//                 value={info.city.value}
//                 onChange={(e) => {
//                   onInputChange("city", e.target.value);
//                 }}
//                 className="form-control mt-1"
//                 placeholder="Enter city Name"
//               />
//               <p
//                 style={{
//                   display:
//                     info.city.touched && info.city.hasError
//                       ? "block"
//                       : "none",
//                   color: "red",
//                 }}
//               >
//                 {info.city.error}{" "}
//               </p>
//             </div>

//             <div className="form-group mt-3">
//               <label>pincode</label>
//               <input
//                 type="text"
//                 id="pincode"
//                 value={info.pincode.value}
//                 onChange={(e) => {
//                   onInputChange("pincode", e.target.value);
//                 }}
//                 className="form-control mt-1"
//                 placeholder="Enter pincode"
//               />
//               <p
//                 style={{
//                   display:
//                     info.pincode.touched && info.pincode.hasError
//                       ? "block"
//                       : "none",
//                   color: "red",
//                 }}
//               >
//                 {info.pincode.error}{" "}
//               </p>
//             </div>

//             <div className="form-group mt-3">
//               <label>Address</label>
//               <input
//                 type="text"
//                 id="address"
//                 value={info.address.value}
//                 onChange={(e) => {
//                   onInputChange("address", e.target.value);
//                 }}
//                 className="form-control mt-1"
//                 placeholder="Enter Address"
//               />
//               <p
//                 style={{
//                   display:
//                     info.address.touched && info.address.hasError
//                       ? "block"
//                       : "none",
//                   color: "red",
//                 }}
//               >
//                 {info.address.error}{" "}
//               </p>
//             </div>
//           </td>

//           <td>
//             <div className="form-group mt-3">
//               <label>Gender</label>
//               <select
//                 name="gender"
//                 id="gender"
//                 className="form-control mt-1"
//                 placeholder="Enter First Name"
//               >
//                 <option value="male" selected="selected">
//                   Male
//                 </option>
//                 <option value="female" selected="selected">
//                   Female
//                 </option>
//                 <option value="other" selected="selected">
//                   Other
//                 </option>
//                 <option value="notPreffered" selected="selected">
//                   not preffered to say
//                 </option>
//               </select>
//             </div>

//             <div className="form-group mt-3">
//               <label>Pan Card No</label>
//               <input
//                 type="text"
//                 id="pincode"
//                 value={info.pincode.value}
//                 onChange={(e) => {
//                   onInputChange("pincode", e.target.value);
//                 }}
//                 className="form-control mt-1"
//                 placeholder="Enter Pan card no"
//               />
//               <p
//                 style={{
//                   display:
//                     info.pincode.touched && info.pincode.hasError
//                       ? "block"
//                       : "none",
//                   color: "red",
//                 }}
//               >
//                 {info.pincode.error}{" "}
//               </p>
//             </div>
//             <div className="form-group mt-3">
//               <label>Pan card Images</label>
//               <input
//                 type="file"
//                 className="form-control mt-1"
//                 placeholder=""
//                 onChange={(e) => setFile(e.target.files[0])}
//               />
//             </div>

//             <div className="form-group mt-3">
//               <label>Question</label>
//               <select
//                 name="question"
//                 id="question"
//                 className="form-control mt-1"
//                 placeholder="Enter First Name"
//               >
//                 <option value="">Select Question</option>
//                 <option value="1">
//                   What is the name of your first pet?
//                 </option>
//                 <option value="2">What is your favourite color?</option>
//                 <option value="3">
//                   What is the name of your favourite movie?
//                 </option>
//                 <option value="4"> What was your first car?</option>
//                 <option value="5">
//                   What elementary school did you attend?
//                 </option>
//                 <option value="6">
//                   In which year you completed your graduation?
//                 </option>
//                 <option value="7">
//                   What is your mother's maiden name?
//                 </option>
//                 <option value="8">
//                   Which is your favourite vacation spot?
//                 </option>
//               </select>
//             </div>
//             <div className="form-group mt-3">
//               <label>Answer</label>
//               <input
//                 type="text"
//                 id="answer"
//                 value={info.answer.value}
//                 onChange={(e) => {
//                   onInputChange("answer", e.target.value);
//                 }}
//                 className="form-control mt-1"
//                 placeholder="Enter Answer"
//               />

//               <p
//                 style={{
//                   display:
//                     info.answer.touched && info.answer.hasError
//                       ? "block"
//                       : "none",
//                   color: "red",
//                 }}
//               >
//                 {info.answer.error}{" "}
//               </p>
//             </div>

//             <div className="form-group mt-3">
//               <label>UserName</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={info.username.value}
//                 onChange={(e) => {
//                   onInputChange("username", e.target.value);
//                 }}
//                 className="form-control mt-1"
//                 placeholder="Enter UserName"
//               />
//               <p
//                 style={{
//                   display:
//                     info.username.touched && info.username.hasError
//                       ? "block"
//                       : "none",
//                   color: "red",
//                 }}
//               >
//                 {info.username.error}{" "}
//               </p>
//             </div>

//             <div className="form-group mt-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={info.password.value}
//                 onChange={(e) => {
//                   onInputChange("password", e.target.value);
//                 }}
//                 className="form-control mt-1"
//                 placeholder="Password"
//               />
//               <p
//                 style={{
//                   display:
//                     info.password.touched && info.password.hasError
//                       ? "block"
//                       : "none",
//                   color: "red",
//                 }}
//               >
//                 {info.password.error}{" "}
//               </p>
//             </div>
//           </td>
//         </tr>
//       </table>
//       <div className="d-grid gap-2 mt-3">
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </div>
//       <p className="text-center mt-2">
//         Forgot <a href="#">password?</a>
//       </p>
//     </div>
//   </form>
// </div>
//   );
// }

export default Signup;
