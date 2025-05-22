import Header from "./Header";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function UpdateProduct() {
  const [data, setData] = useState({});
  const { id } = useParams(); // ⬅️ get the product ID from URL

  useEffect(() => {
    async function fetchData() {
      let result = await fetch("http://127.0.0.1:8000/api/product/" + id);
      result = await result.json();
      setData(result.product); // Adjust based on API response structure
    }

    fetchData();
  }, [id]);

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
      <h1>Update Product Page</h1>
      <input type="text" defaultValue={data.name} className="form-control" /><br></br>
      <input type="text" defaultValue={data.price} className="form-control" /><br></br>
      <input type="text" defaultValue={data.description} className="form-control" /><br></br>
      <input type="file" className="form-control" defaultValue={data.file_path}/><br></br>
         <Image src="holder.js/171x180" thumbnail />
      <Button variant="primary">update</Button>
      {/* Add more fields as needed */}
      </div>
    </div>
  );
}

export default UpdateProduct;
