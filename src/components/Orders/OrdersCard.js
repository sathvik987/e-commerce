import React from 'react';
import { Card, Button } from 'react-bootstrap';


class OrdersCard extends React.Component {



    cancelOrder = () => {

        let result = window.confirm('Are you sure you want to cancel.?');
        if (result) {
            fetch('http://localhost:9000/orders/cancelOrder', {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    date: this.props.date,
                    status: 'Canceled',
                })

            }).then(res => res.json())
                .then(ords => {
                    this.props.refreshOrders();
                })

        }
    }

    render() {


        return (
            <div>
                <Card>
                    <Card.Header><strong>Order placed: </strong> {this.props.date}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <strong>Products:</strong> {this.props.products}
                        </Card.Text>
                        <Card.Text>
                            <strong>Price:</strong> {this.props.price}
                        </Card.Text>
                        <Card.Text>
                            <strong>Address:</strong> {this.props.address}
                        </Card.Text>
                        <Card.Text>
                            <strong>Status:</strong> {this.props.status}
                        </Card.Text>
                        <div>
                            {
                                this.props.status === "Canceled" ? (
                                    <div></div>
                                ) : (
                                        <Button variant="primary" size='sm' onClick={this.cancelOrder}>Cancel</Button>
                                    )
                            }
                        </div>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export default OrdersCard;
