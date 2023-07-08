import React from 'react';
import './Product.css';

const Product = (props) => {
    //console.log(props);

    const {name, price, seller, img}=props.pd;
    return (
        <div className="p_details">
            <div className='image'>
                <img src={img} alt="" />
            </div>
            <div className='text-detals'>

                <h2>{name}</h2>
                <small>By: {seller}</small>
                <h3>Price: ${price}</h3>
                <h4>This is cart</h4>
                <br />
                <br />
                <button onClick={()=>props.handle(props.pd)} id='btn'>Add to Cart</button>
            </div>
        </div>
    );
};


export default Product;