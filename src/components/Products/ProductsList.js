import React from 'react';
import Product from './Product';
import './Product.css'

const ProductsList = ({ products }) => {

    if (!products) {
        return <h1 style={{ textAlign: "center" }}> Loading </h1 >
    }


    return (
        <div className="grid-wrapper">

            {
                products.map((item, i) => {
                    return (<Product key={i}
                        productname={item.productname}
                        description={item.description}
                        price={item.price}
                        image={item.image} />);
                })
            }

        </div>
    );
}

export default ProductsList;