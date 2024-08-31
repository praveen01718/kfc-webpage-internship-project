import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, updateQuantity } from '../Store/Cartslice/CartSlice';
import { Link } from 'react-router-dom';
const Cart = () => {
    const cartProducts = useSelector((state)=>state.cart.cartItems);
    const dispatch = useDispatch();
    const deleteCart=(item)=>{
    dispatch(deleteFromCart(item));
    };
    const incrementCart = (_id,quantity)=>{
      if(quantity<10)
      dispatch(updateQuantity({_id,quantity: quantity+1}))
    };
    const decrementCart = (_id,quantity)=>{
      if(quantity>1){
        dispatch(updateQuantity({_id,quantity: quantity-1}))
      }
    }
    const totalQuantity = cartProducts.reduce((total,Product)=>total+Product.quantity,0);
    const totalAmount = cartProducts.reduce((total,Product)=>total+Product.price*Product.quantity,0);
    const totalPrice = totalAmount.toFixed(2)
    
  return (
    
    <div>
      totalQuantity?
      <section >
               <div className='container baby'>
        {cartProducts.map((Product)=>(
            <div class="card mb-3" key={Product.id}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={Product.img} class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{Product.title}</h5>
                  <h5 class="card-text">{Product.price}</h5>
                  <p class="card-text"><small class="text-body-secondary">{Product.des}</small></p>
                  <button className='btn btn-danger'><button className='btn btn-danger btn-sm' onClick={()=>decrementCart(Product._id,Product.quantity)}>-</button>{Product.quantity}<button className='btn btn-danger btn-sm' onClick={()=>{incrementCart(Product._id,Product.quantity)}}>+</button></button>
                  <br></br>
                  <br></br>
                  <button className='btn btn-danger' onClick={()=>deleteCart(Product)}>delete</button>
                </div>
              </div>
            </div>
          </div>
          )) }
          <div className='card cd'>
            <h3 className='card-title'>{totalQuantity}items in your cart</h3>
            <p className='card-title'>Rs : {totalPrice}</p>
            <button className='btn btn-danger'>Checkout</button>
          </div>
        </div> 
        </section> :
          <section className='ct1 mb-5'>
            <div className='ct'>
              <br/>
              <button className='btn btn-danger'><Link className='lin' to="/menu">SHOP MORE</Link></button>
            </div>
          </section>
          
        

        

    </div>
  )
}

export default Cart