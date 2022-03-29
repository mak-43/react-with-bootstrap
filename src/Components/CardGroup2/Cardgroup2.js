import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const Cardgroup2 = () => {
    const products=[
        {id:1,name:'laptop asus',price:120000},
        {id:2,name:'laptop apple',price:140000},
        {id:3,name:'laptop dell',price:160000}
    ]
    return (
        <div>
            <CardGroup>
            {
                    products.map(product=> <Card2
                         key={product.id}
                          product={product}
                          ></Card2>)
                }
            </CardGroup>
        </div>
    );
};

export default Cardgroup2;