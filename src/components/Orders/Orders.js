import React from 'react';



class Orders extends React.Component {


    render() {
        return (
            <div>
                {this.props.user ? (
                    <h4 style={{ textAlign: 'center' }}>{this.props.user.name}'s orders  </h4>

                ) : (
                        <h4 style={{ textAlign: 'center' }}>Sign in to view your orders</h4>
                    )
                }
            </div>
        )
    }
}

export default Orders;
