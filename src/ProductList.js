import Header from "./Header";
import React,{useState,useEffect} from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, Navigate } from 'react-router-dom';


function ProductList()
{
    const [data,setData]=useState([]);

   useEffect(() => {
  

    fetchData();
  }, []);

    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/list");
        const result = await response.json();
        setData(result.products); // Assuming API returns { status, products }
        console.log(result.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  async function deleteData(id)
  {
        let DeleteResult=await fetch("http://127.0.0.1:8000/api/products/delete/"+id,{
            method:"DELETE",
        });
        DeleteResult=await DeleteResult.json();
        fetchData();
        
        
  }

    return(
        <div>
            <Header/>
            <h1>Product List</h1>

             <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Image</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((item) => {
  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.description}</td>
      <td>{item.price}</td>
      <td>
        <img
          src={`http://localhost:3000/api/product/${item.file_path}`}
          alt={item.name}
          width="80"
        />
      </td>
      <td><Button onClick={()=>deleteData(item.id)} variant="danger">Delete</Button>&nbsp;&nbsp;<Link to={"/update/"+item.id} variant="primary"><span>Update</span></Link></td>
    </tr>
  );
})

        }
     
       
      </tbody>
    </Table>
        </div>
    );
}

export default ProductList;