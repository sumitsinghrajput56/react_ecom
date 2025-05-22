import Header from "./Header";
import { useState } from "react";
import Table from 'react-bootstrap/Table';

function SearchProduct() {

    const [data,setData]=useState([]);

async function search_product(key) {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/search/" + key);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    setData(result.products); // Assuming your Laravel response contains 'products'
    console.log(data);
  } catch (error) {
    console.error("Error during fetch:", error);
  }
}

 
  return (
    <div>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
        <h1>Search Product</h1>
        <input type="text" onChange={(e)=>search_product(e.target.value)} className="form-control"  />
        </div>


         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {
            data.length>0?
            data.map((item)=>(
<tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.description}</td>
          <td>Image</td>
        </tr>
            )):<h1>No Record Found</h1>
        }
        
        
      </tbody>
    </Table>
    </div>
  )
}
export default SearchProduct;
