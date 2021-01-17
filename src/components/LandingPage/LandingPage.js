import React from 'react';
import { Row, Container, Col, Card, Image } from 'react-bootstrap';
import './LandingPage.css'
import fastLogo from './img/Delivery 01.jpg'
import stripeLogo from './img/stripe-payment-logo.png'
import Cs from './img/Cs.png'
import StripeLogo from './img/Stripe-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"


function LandingPage() {
    return (
        <div>
            <Container fluid className='banner'>
                <Row>
                    <Col><div className="buffer"></div></Col>
                </Row>
                <Row>
                    <Col className="banner-text"><h2>SHOP ONLINE</h2>
                        <h5>Here you will be able to find a wide selection of gadgets from top brands</h5>
                    </Col>
                </Row>
            </Container>
            <br />
            <div className='cardWrapper'>

                <Card style={{ width: '25rem', border: 'none' }}>
                    <Card.Img variant="top" src={fastLogo} className="cardImg" />
                    <Card.Body>
                        <Card.Title>Free Shipping</Card.Title>
                        <Card.Text>
                            Orders are packaged as per specialized business standards.
                            We claim all authority to decide the transportation technique and schedule. Shipment is generally completed by a courier delivery service.
                      </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem', border: 'none' }}>
                    <Card.Img variant="top" src={stripeLogo} className="cardImg" />
                    <Card.Body>
                        <Card.Title>Secured payment</Card.Title>
                        <Card.Text>
                            Payments are handled via stripe. Stripe has been audited by a PCI-certified auditor and is certified to PCI Service Provider Level 1.
                            This is the most stringent level of certification available in the payments industry.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '25rem', border: 'none' }}>
                    <Card.Img variant="top" src={Cs} className="cardImg" />
                    <Card.Body>
                        <Card.Title>Customer support</Card.Title>
                        <Card.Text>
                            Get in touch with us by filling out the contact form with regard to complaints about products sold. We will get back to you shortly, usually within 1-2 hours.
                            We will do our best to provide the best service.
                    </Card.Text>
                    </Card.Body>
                </Card>

            </div>

            <Container fluid className="footer">
                <Row>
                    <Col>
                        <h3>About us</h3>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor.
                        Vitae justo eget magna fermentum iaculis. Tempus urna et pharetra pharetra massa.
                        Accumsan lacus vel facilisis volutpat est velit.
                        Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar.
                        Pellentesque dignissim enim sit amet venenatis. Nulla facilisi morbi tempus iaculis. Eget dolor morbi non arcu.
                        Dui nunc mattis enim ut tellus elementum sagittis vitae.</h6>
                    </Col>
                    <Col>
                        <Image src={StripeLogo} fluid className='footerImg' />
                        <div className='social'>
                            <FontAwesomeIcon icon={faFacebook} size="3x" style={{ margin: 30, cursor: 'pointer' }} />
                            <FontAwesomeIcon icon={faInstagram} size="3x" style={{ margin: 30, cursor: 'pointer' }} />
                            <FontAwesomeIcon icon={faTwitter} size="3x" style={{ margin: 30, cursor: 'pointer' }} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default LandingPage;
