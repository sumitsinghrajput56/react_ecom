import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Register from "./Register";
import Protected from "./Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/add"
            element={
              <Protected cmp={AddProduct}>
                <AddProduct />
              </Protected>
            }
          />
          <Route
            path="/update"
            element={
              <Protected cmp={UpdateProduct}>
                <UpdateProduct />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
