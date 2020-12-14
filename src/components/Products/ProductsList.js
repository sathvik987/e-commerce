import React from 'react';
import Product from './Product';
import './Product.css'

class ProductsList extends React.Component {

    render() {
        if (!this.props.products) {
            return <h1 style={{ textAlign: "center" }}> Loading </h1 >
        }

        let display = "";
        if (this.props.searchfield) {
            display = <div style={{ textAlign: 'center' }}><h4>Showing results for {this.props.searchfield}</h4></div>
        } else {
            display = <div></div>
        }


        return (
            <div>
                {display}
                <div className="grid-wrapper" >
                    {
                        this.props.products.map((item) => {

                            if (item.productname in this.props.cart) {
                                return (<Product key={item.productname}
                                    productname={item.productname}
                                    description={item.description}
                                    price={item.price}
                                    image={item.image} cartHandler={this.props.cartHandler}
                                    color={"danger"} buttonText={"Remove"} />)

                            }
                            return (<Product key={item.productname}
                                productname={item.productname}
                                description={item.description}
                                price={item.price}
                                image={item.image} cartHandler={this.props.cartHandler}
                                color={"primary"} buttonText={"Add to cart"} />)

                        })
                    }

                </div>
            </div>
        );
    }
}

export default ProductsList;