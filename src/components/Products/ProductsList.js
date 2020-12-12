import React from 'react';
import Product from './Product';
import './Product.css'

class ProductsList extends React.Component {

    render() {
        if (!this.props.products) {
            return <h1 style={{ textAlign: "center" }}> Loading </h1 >
        }
        return (
            <div className="grid-wrapper" >

                {
                    this.props.products.map((item, i) => {
                        return (<Product key={i}
                            productname={item.productname}
                            description={item.description}
                            price={item.price}
                            image={item.image} cartHandler={this.props.cartHandler} />);
                    })
                }

            </div>
        );
    }
}

export default ProductsList;