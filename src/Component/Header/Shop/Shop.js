import React, { useState } from 'react';
import data from '../../../fakeData/products.json';
import './Shop.css'
import Product from '../Product/Product';
import Crt from '../../Crt/Crt';


const Shop = () => {
    //console.log(data);

   const all= data;
   const [products]= useState(all);
   
   const [cart,setcart]= useState([]);

   //console.log(ten);

   const handleAddProduct=(pd)=>{
    console.log("product added to cart",pd);
        
        const newcart= [...cart, pd];
        setcart(newcart);
   }
  
    return (
        <div className='shopping'>


            <div className='shop'>
                
                
                <ul>
                    {
                        products.map(product=><Product pd={product} handle={handleAddProduct}></Product>)
                    }
                </ul>

            </div>

            <div>
                {
                    // cart.map(carts=><Crt up={carts}></Crt>)
                    <Crt up={cart} ></Crt>
                }
                
            </div>


        </div>
    );
};

export default Shop;