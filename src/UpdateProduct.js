import Header from "./Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function UpdateProduct() {
  const [data, setData] = useState({});
  const { id } = useParams(); // ⬅️ get the product ID from URL
   const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       let result = await fetch("http://127.0.0.1:8000/api/product/" + id);
//       result = await result.json();
//       setData(result.product); // Adjust based on API response structure
//     }

//     fetchData();

//     setData(data.file);
//     setName(data.name);
//     setPrice(data.price);
//     setDescription(data.description);
//   }, [id]);



useEffect(() => {
  async function fetchData() {
    let result = await fetch("http://127.0.0.1:8000/api/product/" + id);
    result = await result.json();
    const product = result.product;

    setData(product);
    setName(product.name || ""); // fallback in case value is missing
    setPrice(product.price || "");
    setDescription(product.description || "");
  }

  fetchData();
}, [id]);


async function Update_Product(id) {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("description", description);
  if (file) {
    formData.append("file", file);
  }

  let result = await fetch(`http://127.0.0.1:8000/api/products/update/${id}`, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  const responseData = await result.json();
  console.log(responseData);
}


  return (
    <div>
      <Header />

       <div className="col-sm-6 offset-sm-3">
        <h1>Update product Page</h1>
        <input
          type="text"
          defaultValue={data.name}
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
          defaultValue={data.price}
          className="form-control"
          onChange={(e) => setPrice(e.target.value)}
          placeholder="please enter price"
        />
        <input
          type="text"
          defaultValue={data.description}
          className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="please enter description"
        />
        <button onClick={()=>Update_Product(data.id)}>Update product</button>
      </div>
    </div>
  );
}

export default UpdateProduct;
