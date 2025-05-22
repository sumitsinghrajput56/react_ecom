import Header from "./Header";
import { useState } from "react";
function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function Add_Product() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("file", file); // Make sure `file` is a File object (from <input type="file">)
    formData.append("price", price);
    formData.append("description", description);

    let result = await fetch("http://127.0.0.1:8000/api/products/add", {
      method: "POST",
      body: formData, // Do NOT stringify FormData
      // Do NOT set Content-Type — browser will set it automatically for multipart/form-data
      headers: {
        Accept: "application/json",
      },
    });

    const responseData = await result.json();
    console.log(responseData);
  }

  return (
    <>
      <Header />

      <div className="col-sm-6 offset-sm-3">
        <h1>add product Page</h1>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
        <input
          type="file"
          className="form-control"
          onChange={(e) => setFile(e.target.files[0])}
          placeholder="Please choose File"
        />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="please enter price"
        />
        <input
          type="text"
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="please enter description"
        />
        <button onClick={Add_Product}>Add product</button>
      </div>
    </>
  );
}
export default AddProduct;
