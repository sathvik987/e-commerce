import React from 'react';
import OrdersCard from './OrdersCard';
import './Orders.css'

class Orders extends React.Component {


    constructor() {
        super();
        this.state = {
            ordersObj: ''
        };
    }

    componentDidMount() {

        if (this.props.user.email) {
            fetch('http://localhost:9000/orders/allorders', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: this.props.user.email,
                })

            }).then(res => res.json())
                .then(ords => {
                    ords.sort((a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0));
                    this.setState({ ordersObj: ords })
                })
        }
    }

    refreshOrders = () => {

        fetch('http://localhost:9000/orders/allorders', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.props.user.email,
            })

        }).then(res => res.json())
            .then(ords => {
                this.setState({ ordersObj: ords.sort((a, b) => (a.date < b.date) ? 1 : ((b.date < a.date) ? -1 : 0)) })
            })

    }

    componentWillUnmount() {
        this.setState({ ordersObj: '' })
    }

    render() {


        return (
            <div className='center_div'>
                {this.props.user ? (
                    <div>

                        {
                            this.state.ordersObj !== '' ? (
                                <div>
                                    {this.state.ordersObj.length === 0 ? (
                                        <h4 style={{ textAlign: 'center' }}>No orders yet </h4>
                                    ) : (
                                            <div>
                                                <h4 style={{ textAlign: 'center' }}>{this.props.user.name}'s orders  </h4>

                                                {
                                                    this.state.ordersObj.map((order) => {
                                                        return (
                                                            <OrdersCard
                                                                key={order.date}
                                                                date={order.date}
                                                                products={order.productnames}
                                                                price={order.price}
                                                                address={order.address}
                                                                status={order.status}
                                                                refreshOrders={this.refreshOrders}
                                                                email={order.email}
                                                            />)

                                                    })
                                                }

                                            </div>
                                        )}

                                </div>

                            ) : (
                                    <h4 style={{ textAlign: 'center' }}>Loading...</h4>
                                )
                        }

                    </div>
                ) : (
                        <h4 style={{ textAlign: 'center' }}>Login to view your orders</h4>
                    )
                }
            </div>
        )
    }
}

export default Orders;
