import React from 'react';
import './Cart.css'


class Cart extends React.Component {


    render() {


        return (


            <div>
                <h2 className='center'>Cart</h2>
                {this.props.cartSize ? (
                    <h4 className='center'>items</h4>

                ) : (
                        <h4 className='center'> You have no items in your cart</h4>
                    )
                }
            </div>
        )
    }
}


export default Cart;