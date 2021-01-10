import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.css'



function Contact(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangeContent = (e) => {
        setContent(e.target.value)
    }
    useEffect(() => {
        if (props.user) {
            setName(props.user.name)
            setEmail(props.user.email)
        }
    }, [props.user]);
    const onSubmit = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (name && content && re.test(String(email).toLowerCase())) {
            fetch('http://localhost:9000/contacts/addmessage', {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    message: content,
                    name: name
                })

            }).then(res => res.json())
                .then(msg => {
                    alert("Thank you for contacting us. We will get back to you soon.")
                    props.onRouteChange('home')
                })
        } else {
            alert("Please fill in all the required fields.")
        }

    }
    return (

        props.user ? (
            < div >
                <h4 style={{ textAlign: 'center' }}>Contact Page</h4>
                <Form className='center_div'>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={onChangeName} value={props.user.name} disabled={true} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail} value={props.user.email} disabled={true} />
                    </Form.Group>
                    <Form.Group controlId="formBasicContent">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={7} placeholder="Your message" onChange={onChangeContent} />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={onSubmit}>
                        Submit
                </Button>
                </Form>
            </div >
        ) : (
                < div >
                    <h4 style={{ textAlign: 'center' }}>Contact Page</h4>
                    <Form className='center_div'>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" onChange={onChangeName} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail} />
                        </Form.Group>
                        <Form.Group controlId="formBasicContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control as="textarea" rows={7} placeholder="Your message" onChange={onChangeContent} />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={onSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div >
            )

    );
}

export default Contact;
