import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../thunks/productThunks";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [details, setDetails] = useState([]);
  const [visible, setvisible] = useState(false);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const data = useSelector((state) => state.productSlice);
  const updateHandle = () => {};

  const foo = () => {
    dispatch(fetchProducts());
    setDetails(data.products.products);
    setvisible(true);
  };
  // let param = document.getElementById("search");
  useEffect(() => {
    foo();
  }, [data]);

  const clickHandler = () => {};

  const createProductBtn = () => {
    nav("/createProduct");
  };
  console.log(details);
  return (
    <div
      style={{
        background: "lightblue",
        color: "white",
        width: "85vw",
        padding: "1rem",
        position: "fixed",
        right: "0%",
        top: "10%",
      }}
    >
      <h2 style={{ color: "black" }}>products</h2>
      <br />
      <input
        type="search"
        placeholder="search"
        style={{ color: "black" }}
        id="search"
      />
      <button onClick={clickHandler}>click</button>
      <div>
        <button
          type="button"
          className="btn btn-secondary"
          style={{ marginRight: "1200px" }}
          onClick={createProductBtn}
        >
          NewProduct
        </button>
      </div>

      <div
        className="main-container"
        style={{ background: "orange", marginTop: "60px", color: "white" }}
      >
        <Table style={{ border: "2px solid black" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>categery</th>
              <th>stock</th>
              <th>Price</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            {details?.map((ele) => (
              <tr>
                <td>{ele._id}</td>
                <td>{ele.name}</td>
                <td>{ele.description}</td>
                <td>{ele.category}</td>
                <td>{ele.stock}</td>
                <td>{ele.price}</td>
                <td>
                  <button
                    style={{ background: "green", color: "white" }}
                    onClick={updateHandle}
                  >
                    update
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ProductList;
