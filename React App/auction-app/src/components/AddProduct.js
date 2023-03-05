import { Link, useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";

// const user_id = localStorage.getItem("loggedUser")
//   ? JSON.parse(localStorage.getItem("loggedUser")).user_id
//   : 25;
// const user_id = JSON.parse(localStorage.getItem("loggedUser")).user_id;
//const user_id = localStorage.getItem("loggedUser").user_id;

const init = {
  product_name: { value: "", hasError: true, touched: false, error: "" },
  description: { value: "", hasError: true, touched: false, error: "" },
  product_image_1: { value: "", hasError: true, touched: false, error: "" },
  product_image_2: { value: "", hasError: true, touched: false, error: "" },
  product_image_3: { value: "", hasError: true, touched: false, error: "" },
  base_price: { value: "", hasError: true, touched: false, error: "" },

  isFormValid: false,
};

const init1 = {
  product_name: "",
  category_id: "",
  description: "",
  base_price: "",
  seller_id: "",
  status: "pending",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update": {
      const { username, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [username]: { username, value, hasError, error, touched },
        isFormValid,
      };
    }
    case "reset": {
      return init;
    }
  }
};

const reducer1 = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.fld]: action.value };

    case "reset":
      return init1;
  }
};

export default function AddProduct() {
  const user_id = JSON.parse(localStorage.getItem("loggedUser")).user_id;
  const onInputChange = (username, value) => {
    const { hasError, error } = validateData(username, value);
    let isFormValid = true;

    for (const key in info) {
      //const item = info[key];
      if (info[key].hasError === true) {
        isFormValid = false;
        break;
      }
    }
    dispatch({
      type: "update",
      data: { username, value, hasError, error, touched: true, isFormValid },
    });
  };

  const validateData = (name, value) => {
    let hasError = false;
    let error = "";
    switch (name) {
      case "product_name":
        // let regex2 = /^[A-Za-z0-9\s,'!@#$%^&*]{3,25}$/;
        let regex2 = /^.{3,40}$/;

        if (!regex2.test(value)) {
          hasError = true;
          error = "Product Name should contain atleast 3 character";
        }

        break;

      case "description":
        // let regex3 = /^[A-Za-z0-9\s.,'!@#$%^&*]{20,150}$/;
        let regex3 = /^.{20,150}$/;

        if (!regex3.test(value)) {
          hasError = true;
          error = "Description should contain atleast 20 character";
        }

        break;

      // case "ProductImage1":
      //   let regex4 = /^[A-Za-z0-9!@#$%^&*]{2,16}$/;

      //   if (!regex4.test(value)) {
      //     hasError = true;
      //     error = "Product Image contain atleast one image";
      //   }

      //   break;

      case "base_price":
        let regex5 = /^[1-9][0-9]{2,8}$/;

        if (!regex5.test(value)) {
          hasError = true;
          error = "Set base price at least 100 rupees.";
        }

        break;
    }

    return { hasError, error };
  };

  const sendData = (e) => {
    e.preventDefault();

    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info1),
    };

    fetch("http://localhost:8080/regproduct", reqOptions)
      .then((resp) => {
        if (resp.ok) return resp.json();
        else throw new Error("Server Error");
      })
      .then((obj) => {
        console.log(obj);
        const pid = obj.p_Id;
        const fd = new FormData();
        fd.append("file", file);

        const fd1 = new FormData();
        fd1.append("file", file1);

        const fd2 = new FormData();
        fd2.append("file", file2);
        console.log(file, file1, file2);
        console.log(fd);

        if (file) {
          const reqOptions1 = {
            method: "POST",
            //headers: { "content-type": "multipart/form-data" },
            body: fd,
          };
          fetch("http://localhost:8080/uploadproductimage1/" + pid, reqOptions1)
            .then((resp) => resp.json())
            .then((obj) => {
              if (obj) {
                console.log("Image1 uploaded succesfully..");
                if (file1) {
                  const reqOptions1 = {
                    method: "POST",
                    //headers: { "content-type": "multipart/form-data" },
                    body: fd1,
                  };
                  fetch(
                    "http://localhost:8080/uploadproductimage2/" + pid,
                    reqOptions1
                  )
                    .then((resp) => resp.json())
                    .then((obj) => {
                      if (obj) {
                        console.log("Image2 uploaded succesfully..");
                        if (file2) {
                          const reqOptions1 = {
                            method: "POST",
                            //headers: { "content-type": "multipart/form-data" },
                            body: fd2,
                          };
                          fetch(
                            "http://localhost:8080/uploadproductimage3/" + pid,
                            reqOptions1
                          )
                            .then((resp) => resp.json())
                            .then((obj) => {
                              if (obj) {
                                console.log("Image3 uploaded succesfully..");
                              }
                              //else {
                              //   alert(
                              //     "Unable to uplaod image 3 .something went wrong.."
                              //   );
                              // }
                            });
                        }
                      }
                      // else {
                      //   alert("Unable to uplaod image 2 .something went wrong..");
                      // }
                    });
                }
              } else {
                alert("Unable to uplaod image 1 .something went wrong..");
              }
            });
        }

        // const reqOptions1 = {
        //   method: "POST",
        //   //headers: { "content-type": "multipart/form-data" },
        //   body: fd,
        // };
        // fetch(
        //   "http://localhost:8080/uploadproductimages/" + obj.P_Id,
        //   reqOptions1
        // )
        //   .then((resp) => resp.json())
        //   .then((obj) => {
        //     if (obj) {
        //       alert("Registration succesful.Try Login.");
        //       navigate("/");
        //     } else {
        //       alert(
        //         "Registration succesful.Pan card image submission failed.Try Login"
        //       );
        //       navigate("/");
        //     }
        //   });
        alert("Product Added successfully.You will get notified soon...");
        navigate(-1);
      })
      .catch((error) => alert("server error"));

    // fetch("http://localhost:8080/checklogin", reqOptions)
    //   .then((resp) => {
    //     if (resp.ok) return resp.text();
    //     // else throw new Error("Server Error");
    //   })
    //   .then((text) => (text.length ? JSON.parse(text) : {}))
    //   .then((obj) => {
    //     if (Object.keys(obj).length === 0) {
    //       setMsg("Wrong Username or Password");
    //     } else {
    //       if (obj.account_status === "pending") {
    //         setMsg("Request is still pending");
    //         // alert("Request is still pending");
    //       } else {
    //         // reduxAction(login());
    //         // localStorage.setItem("loggedUser", JSON.stringify(obj));
    //         if (obj.user_type_id.user_type_id === 1) {
    //           setMsg("");
    //           navigate("/admin_home");
    //         } else if (obj.user_type_id.user_type_id === 2) {
    //           setMsg("");
    //           navigate("/seller_home");
    //         } else if (obj.user_type_id.user_type_id === 3) {
    //           setMsg("");
    //           navigate("/bidder_home");
    //         }
    //       }
    //     }
    //   });
  };

  const [info, dispatch] = useReducer(reducer, init);
  const [info1, dispatch1] = useReducer(reducer1, init1);
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Add Product Information</h3>
          <div className="text-center">
            You will receive product approval within 1 day
          </div>
          <table>
            <tr>
              <td>
                {/* <br/>
            <br/>
            <br/> */}
                <div className="form-group mt-3">
                  <label>Product Name</label>
                  <input
                    type="text"
                    name="product_name"
                    id="product_name"
                    className="form-control mt-1"
                    placeholder="Enter Product Name..."
                    //value={info.product_name.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "product_name",
                        value: e.target.value,
                      });
                    }}
                    onKeyUp={(e) => {
                      onInputChange("product_name", e.target.value);
                    }}
                    onKeyDown={() => {
                      dispatch1({
                        type: "update",
                        fld: "seller_id",
                        value: user_id,
                      });
                    }}
                  />
                  <p
                    style={{
                      display:
                        info.product_name.touched && info.product_name.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.product_name.error}{" "}
                  </p>
                </div>

                <div className="form-group mt-3">
                  <label>Product Category</label>
                  <select
                    name="category_id"
                    id="category_id"
                    // onChange={(e) => {
                    //   dispatch1({
                    //     type: "update",
                    //     fld: "q_id",
                    //     value: e.target.value,
                    //     //myProtein = parseInt(document.getElementById("proteinperc").value);
                    //   });
                    // }}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "category_id",
                        value: e.target.value,
                      });
                    }}
                    className="form-control mt-1"
                    placeholder="Enter First Name"
                  >
                    <option>Select Category</option>
                    <option value="1">Antique</option>
                    <option value="2">Painting</option>
                    <option value="3">Artefact</option>
                    <option value="4"> Furniture</option>
                    <option value="5">Comics or Cards Limited Edition</option>
                    <option value="6">Sports Memorabilia</option>
                    <option value="7">Signed Memorabilia</option>
                    <option value="8">Other</option>
                  </select>
                </div>

                <div className="form-group mt-3">
                  <label>Description</label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    //value={info.description.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "description",
                        value: e.target.value,
                      });
                    }}
                    onKeyUp={(e) => {
                      onInputChange("description", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Enter Product Description..."
                  />
                  <p
                    style={{
                      display:
                        info.description.touched && info.description.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.description.error}{" "}
                  </p>
                </div>

                <div className="form-group mt-3">
                  <label>Prouct Image 1</label>
                  <input
                    type="file"
                    name="product_image_1"
                    id="product_image_1"
                    //value={images}
                    onChange={(e) => setFile(e.target.files[0])}
                    required
                    //onChange={onChange}
                    //maxNumber={maxNumber}
                    className="form-control mt-1"
                    placeholder="Upload Product Image No. 1"
                  />
                  <p
                    style={{
                      display:
                        info.product_image_1.touched &&
                        info.product_image_1.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.product_image_1.error}{" "}
                  </p>
                </div>

                <div className="form-group mt-3">
                  <label>Prouct Image 2</label>
                  <input
                    type="file"
                    name="product_image_2"
                    id="product_image_2"
                    //value={info.ProductImage2.value}
                    onChange={(e) => setFile1(e.target.files[0])}
                    required
                    className="form-control mt-1"
                    placeholder="Upload Product Image No. 2"
                  />

                  <p
                    style={{
                      display:
                        info.product_image_2.touched &&
                        info.product_image_2.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.product_image_2.error}{" "}
                  </p>
                </div>

                <div className="form-group mt-3">
                  <label>Prouct Image 3</label>
                  <input
                    type="file"
                    name="product_image_3"
                    id="product_image_3"
                    //value={info.ProductImage2.value}
                    onChange={(e) => setFile2(e.target.files[0])}
                    required
                    className="form-control mt-1"
                    placeholder="Upload Product Image No. 3"
                  />

                  <p
                    style={{
                      display:
                        info.product_image_3.touched &&
                        info.product_image_3.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.product_image_3.error}{" "}
                  </p>
                </div>

                {/* <div className="form-group mt-3">
                  <label>Prouct Image 3</label>
                  <input
                    type="image"
                    name="ProductImage3"
                    id="ProductImage3"
                    //value={info.ProductImage3.value}
                    onChange={(e) => {
                      onInputChange("ProductImage3", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Enter Product Image No. 3"
                  />
                  <p
                    style={{
                      display:
                        info.ProductImage3.touched &&
                        info.ProductImage3.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.ProductImage3.error}{" "}
                  </p>
                </div> */}

                <div className="form-group mt-3">
                  <label>BasePrice</label>
                  <input
                    type="number"
                    id="base_price"
                    name="base_price"
                    //value={info.BasePrice.value}
                    onChange={(e) => {
                      dispatch1({
                        type: "update",
                        fld: "base_price",
                        value: e.target.value,
                      });
                    }}
                    onKeyUp={(e) => {
                      onInputChange("base_price", e.target.value);
                    }}
                    className="form-control mt-1"
                    placeholder="Enter above 100 rupees"
                  />
                  <p
                    style={{
                      display:
                        info.base_price.touched && info.base_price.hasError
                          ? "block"
                          : "none",
                      color: "red",
                    }}
                  >
                    {info.base_price.error}{" "}
                  </p>
                </div>
              </td>
            </tr>
          </table>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                sendData(e);
              }}
            >
              Submit
            </button>

            <button
              type="reset"
              className="btn btn-primary"
              onClick={(e) => {
                dispatch1({ type: "reset" });
              }}
            >
              Clear
            </button>
          </div>
        </div>
        {/* <p>{JSON.stringify(info)}</p>
        <p>{JSON.stringify(info1)}</p>
        <p>{file && file.name}</p>
        <p>{file1 && file1.name}</p>
        <p>{file2 && file2.name}</p>
        <p>{user_id}</p> */}
      </form>
    </div>
  );
}
