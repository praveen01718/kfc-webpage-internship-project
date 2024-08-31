import React, { useEffect, useState } from 'react'
import './MenuPage.css'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,deleteFromCart } from '../Store/Cartslice/CartSlice';


const MenuPage = () => {
  const cartProducts = useSelector((state)=>state.cart.cartItems)
  const dispatch = useDispatch();
  const addCart=(item)=>{
    dispatch(addToCart(item));
  };
  const deleteCart=(item)=>{
    dispatch(deleteFromCart(item));
  }
   
const [Product, setChicken] = useState([]);
useEffect(() => {
  fetch("http://localhost:7777/allproducts")
  .then((res)=>res.json())
  .then((data)=>{
    if(Array.isArray(data)){
      setChicken(data);
    }
    })
  });
  return (    
    <div>
      <section className='part mb-5'>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='card-title'>
              <h2>KFC MENU</h2>
              <ul>
                <li>
                  INTERNATIONAL BURGER FEST
                </li>
                <li>
                  MATCH DAY COMBOS
                </li>
                <li>
                  VALUE LUNCH SPECIALS
                </li>
                <li>
                  BOX MEALS
                </li>
                <li>
                  BURGERS
                </li>
                <li>
                  CHICKEN BUCKETS
                </li>
                <li>
                  RICE BOWLZ
                </li>
                <li>
                  VALUE SNACKERS
                </li>
                <li>
                  CHICKEN ROLLS
                </li>
                <li>
                  SNACKS
                </li>
              </ul>
            </div>
          </div>
          


        <div className='part1 col-lg-8'>
          <div className='row'>
            {Product.map((bike) => (
            <div className='pro col-lg-6'>
              <div className="card" key={bike._id}>
                <img src={bike.img} alt=''/>
              <div className='card-title'>
                <h5>
                {bike.title}
                </h5>
                <h6>
                ₹{bike.price}
                </h6>
              <p>
                {bike.des}
              </p>
              </div>
              {cartProducts.find(items=>items._id === bike._id)?
              <button className='btn btn-danger' onClick={()=>deleteCart(bike)}>Remove from Cart <FaMinus className='ms-2' /></button>:
              <button className='btn btn-danger' onClick={()=>addCart(bike)}>Add to cart <FaPlus className='ms-2' /></button>  
              }
              </div>
            </div>
            ))
          }
            </div>
          </div> 
        </div>
        </div>
      </section>   
    </div>
  )
}

export default MenuPage