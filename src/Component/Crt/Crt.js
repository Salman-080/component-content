import React from 'react';
import './Crt.css'

const Crt = (props) => {

    const up = props.up;
    let total = 0;



    for (let i = 0; i < up.length; i++) {

        const product = up[i];
        total = total + product.price;
    }

    let shipping_cost=0;

    if (total>0 && total<100){
        shipping_cost=12.99;
    }
    else if(total>=100){
        shipping_cost=4.99;
    }
    
    const tax= total/5;
    
    
    const total_grand_price=total+shipping_cost+tax;

    return (
        <div className='cart'>
            <h1>Cart</h1>
            <p>total ordered: {props.up.length}</p>   {/* up declare er kahini */}
            <hr />
            <br />
            <p>Total Product Price: {total}</p>
            <p>Shipping cost: {shipping_cost}</p>
            <p>tax+vat: {tax} </p>
            <p>Total Cost:{total_grand_price}</p>



        </div>
    );
};

export default Crt;