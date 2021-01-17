import React, { useState } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import './Cart.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios'



function Payment(props) {


    const [isProcessing, setIsProcessing] = useState(false)
    const [email, setEmail] = useState(props.user.email);
    const [name, setName] = useState(props.user.name);
    const [address, setAddress] = useState({
        address1: '',
        address2: '',
        city: '',
        state: 'Andhra Pradesh',
        zip: ''
    });
    const [products] = useState(Object.keys(props.cart));
    const [total] = useState(Object.values(props.cart).reduce((accumulator, product) => {
        return accumulator + product;
    }, 0));

    const [checkoutErrMsg, setErrMsg] = useState(false)
    const [buttonMsg, setButtonMsg] = useState("Pay")
    const stripe = useStripe()
    const element = useElements()

    const handleChange = (e) => {
        if (e.error) {
            return setErrMsg(e.error.message)
        }
        setErrMsg("")
    }

    const savedOrder = () => {
        fetch('http://localhost:9000/orders/neworder', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                username: name,
                address: `${address.address1},${address.address2},${address.city},${address.state},${address.zip}`,
                productnames: products.join(', '),
                price: total

            })
        }).then(res => res.json())
    }

    const handlePayment = async () => {

        if (!email || !name || !address.address1 || !address.address2 || !address.city || !address.state || !address.zip) {
            alert("Please fill in all the required fields.")
            return
        }

        setIsProcessing(true)
        setButtonMsg("Processing...")
        const cardElement = element.getElement('card')

        const billingInfo = {
            email: email,
            name: name,
            address: {
                city: address.city,
                line1: address.address1,
                line2: address.address2,
                postal_code: address.zip,
                state: address.state
            },
        }

        try {
            const paymentIntent = await axios.post(
                'http://localhost:9000/orders/payment',
                {
                    amount: total,
                    email: email,
                }
            )

            const paymentMethod = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
                billing_details: billingInfo
            })

            if (paymentMethod.error) {
                setErrMsg(paymentMethod.error.message)
                setIsProcessing(false)
                setButtonMsg("Pay")
                return
            }

            const confrimPayment = await stripe.confirmCardPayment(paymentIntent.data, {
                payment_method: paymentMethod.paymentMethod.id
            })

            if (confrimPayment.error) {
                setErrMsg(confrimPayment.error.message)
                setIsProcessing(false)
                setButtonMsg("Pay")
                return
            }

            setTimeout(() => {
                setButtonMsg("Success! Payment is Complete")
                savedOrder();
            }, 2000)

            setTimeout(() => {
                alert('Thank you for shopping. Your order has been placed.')
                props.clearCart()
                props.onRouteChange('home')
            }, 3000)
        } catch (err) {

            setErrMsg(err.message)
            setIsProcessing(false)

        }

    }

    const onaddress1Change = (event) => {
        setAddress(prevState => {
            return { ...prevState, address1: event.target.value }
        })
    }

    const onaddress2Change = (event) => {
        setAddress(prevState => {
            return { ...prevState, address2: event.target.value }
        })
    }

    const oncityChange = (event) => {
        setAddress(prevState => {
            return { ...prevState, city: event.target.value }
        })
    }

    const onstateChange = (event) => {
        setAddress(prevState => {
            return { ...prevState, state: event.target.value }
        })
    }

    const onzipChange = (event) => {
        setAddress(prevState => {
            return { ...prevState, zip: event.target.value }
        })
    }

    const onemailChange = (event) => {
        setEmail(event.target.value)
    }

    const onnameChange = (event) => {
        setName(event.target.value)
    }





    return (
        <div>
            {
                props.user ? (
                    <Form className='center_div'>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" onChange={onaddress1Change} />
                        </Form.Group>

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" onChange={onaddress2Change} />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity" onChange={oncityChange} >
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose..." onChange={onstateChange} >
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chandigarh">Chandigarh</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                    <option value="Daman and Diu">Daman and Diu</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Lakshadweep">Lakshadweep</option>
                                    <option value="Puducherry">Puducherry</option>
                                    <option value="Goa">Goa</option>
                                    <option value="Gujarat">Gujarat</option>
                                    <option value="Haryana">Haryana</option>
                                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                    <option value="Jharkhand">Jharkhand</option>
                                    <option value="Karnataka">Karnataka</option>
                                    <option value="Kerala">Kerala</option>
                                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                                    <option value="Maharashtra">Maharashtra</option>
                                    <option value="Manipur">Manipur</option>
                                    <option value="Meghalaya">Meghalaya</option>
                                    <option value="Mizoram">Mizoram</option>
                                    <option value="Nagaland">Nagaland</option>
                                    <option value="Odisha">Odisha</option>
                                    <option value="Punjab">Punjab</option>
                                    <option value="Rajasthan">Rajasthan</option>
                                    <option value="Sikkim">Sikkim</option>
                                    <option value="Tamil Nadu">Tamil Nadu</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Tripura">Tripura</option>
                                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="West Bengal">West Bengal</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip" onChange={onzipChange} >
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                ) : (<Form className='center_div'>
                    <h2 className='center'>Guest Checkout</h2>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail" onChange={onemailChange} >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={onnameChange} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" onChange={onaddress1Change} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" onChange={onaddress2Change} />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity" onChange={oncityChange} >
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" defaultValue="Choose..." onChange={onstateChange} >
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip" onChange={onzipChange} >
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>
                </Form>
                    )
            }
            <div className='center_div'>
                <Form.Label>Card details  <span className="text-muted" style={{ fontSize: 14 }}>
                    ( Test card number - 4242 4242 4242 4242 04/24 242 )
                </span>
                </Form.Label>
                <p style={{ color: 'red' }}>{checkoutErrMsg}</p>
                <CardElement
                    options={{
                        hidePostalCode: true,
                        style: {
                            base: {
                                fontSize: '15px'
                            },
                        },
                    }}
                    onChange={handleChange}
                />
                <br />
                <Button variant="primary" onClick={handlePayment} type="button" disabled={isProcessing} >
                    {buttonMsg}
                </Button>
            </div>

        </div>


    )

}


export default Payment;