import { Button } from "antd/lib/radio";
import React from "react";

const CustomerOrder = () => {
  return (
    <div className="backgroung_page">
      <div className="header">Sales Order</div>
      <div className="customer_details">
        <div className="customer_name">
          <div className="name">Customer Name</div>
          <input type="text" />{" "}
        </div>

        <div className="customer_address">
          <div className="address">Address</div>
          <input type="text" />
        </div>
      </div>
      <table>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>1</td>
          <td>
            <input type="text" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Button type="primary"> Add Item</Button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default CustomerOrder;
