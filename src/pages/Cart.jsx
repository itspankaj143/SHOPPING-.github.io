import React from 'react'
import { useCart } from 'react-use-cart';
import '../pages/Cart.css'

const Cart = () => {

  const { items, totalItems, totalUniqueItems, cartTotal, removeItem, updateItemQuantity } = useCart();
      
  return (

    <>
    <div className="container  ">
     
      <div className="container cart">
        
        <table className="table table-image">
          <thead>

            <tr className="prodName">
              <th>Product</th>
              <th> Description</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Actions</th>
            </tr>

          </thead>

          {items.map((cval) => {
            return (
              <>
                <tr>

                  <td className="">
                    <img src={cval.image} className="cartImage"  alt="cartImage" style={{height:"12vh"}}/>
                  </td>
                  <td className="prodNameCart">{cval.name}</td>
                  <td className="prodNameCart"><i className="fa fa-inr"></i>{cval.price}</td>

                  <div className="d-flex prodbtn">
                    <button className="btn prodNameCart" onClick={() => updateItemQuantity(cval.id, cval.quantity + 1)}>+</button>
                    <td className="prodNameCart" > {cval.quantity}</td>
                    <button className="btn prodNameCart " onClick={() => updateItemQuantity(cval.id, cval.quantity - 1)}>-</button>
                  </div>

                  <td>
                    <button className="btn btn-light text-light bg-danger btn-sm" onClick={() => {removeItem(cval.id)}}> <i className="fa fa-times"> </i></button>
                  </td>
                </tr>
              </>
            )
          })}

        </table>
              
      </div>
    </div>
      <div className="container cartTotal">
                <h3><span className="badge badge-success price text-success">Total: <i className="fa fa-inr"></i> {cartTotal}</span></h3>
                <button type="button" className="btn btn-success">Checkout</button>
        </div>
              
    </>
  )
}

export default Cart