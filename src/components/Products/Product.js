import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css'


class Product extends React.Component {


    render() {


        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"https://arcane-sea-44247.herokuapp.com/" + this.props.image} className="imgs" />
                <Card.Body>
                    <Card.Title>{this.props.productname}</Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>
                        {this.props.description}
                    </Card.Text>
                    <Card.Text>
                        ₹ {this.props.price}
                        <Button className="float-right" variant={this.props.color}
                            onClick={() => this.props.cartHandler(this.props.productname, this.props.price)} >
                            {this.props.buttonText}  </Button>
                    </Card.Text>
                </Card.Body>
            </Card>

        )
    }
}


export default Product;