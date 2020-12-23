import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './Cart.css'

class Cart extends React.Component {


    render() {

        let total = Object.entries(this.props.cart).reduce((accumulator, product) => {
            return accumulator + product[1];
        }, 0)


        return (

            <div>
                <h2 className='center'>Cart</h2>
                {this.props.cartSize ? (
                    <div>
                        <Table className='center_div'>
                            <thead>
                                <tr>
                                    <th>Products Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    Object.entries(this.props.cart).map(product => {
                                        return (<tr>
                                            <td>{product[0]} <Button variant="danger" size="sm"
                                                className="float-right" onClick={() => this.props.cartHandler(product[0], product[1])} >Remove</Button></td>
                                            <td>₹ {product[1]}</td>
                                        </tr>)
                                    })
                                }

                                <tr>
                                    <th>Total</th>
                                    <td>₹ {total}</td>
                                </tr>

                            </tbody>

                        </Table>
                        <br></br>
                        <div className="center_div"> <Button variant="info">Proceed to buy </Button> </div>
                    </div>

                ) : (
                        <h4 className='center'> You have no items in your cart</h4>
                    )
                }

            </div>
        )
    }
}


export default Cart;