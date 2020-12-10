import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: "Add to cart",
            color: 'primary',
            clicked: false
        }
    }

    buttonClick = () => {
        if (this.state.color === 'primary') {
            this.setState({
                buttonText: "Remove",
                color: 'danger',
                clicked: true
            })
        } else {
            this.setState({
                buttonText: "Add to cart",
                color: 'primary',
                clicked: false
            })
        }
    }

    render() {
        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={"http://localhost:9000/" + this.props.image} style={{ height: "16rem" }} className="image" />
                <Card.Body>
                    <Card.Title>{this.props.productname}</Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>
                        {this.props.description}
                    </Card.Text>
                    <Card.Text>
                        ₹ {this.props.price}
                    </Card.Text>
                    <Button variant={this.state.color} onClick={this.buttonClick}>  {this.state.buttonText} </Button>
                </Card.Body>
            </Card>

        )
    }
}


export default Product;