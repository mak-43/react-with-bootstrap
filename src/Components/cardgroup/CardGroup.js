import React from 'react';
import Card from '../card/Card';

const CardGroup = () => {
    const products=[
        {id:1,name:'laptop asus',price:120000},
        {id:2,name:'laptop apple',price:140000},
        {id:3,name:'laptop dell',price:160000}
    ]
    return (
        <div>
            <h4>this is card</h4>
            <div className='card-group'>
                {
                    products.map(product=> <Card
                         key={product.id}
                          product={product}
                          ></Card>)
                }
            </div>
        </div>
    );
};

export default CardGroup;