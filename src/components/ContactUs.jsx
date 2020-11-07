import React from "react";
import Header from "./Header";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "./Button";

function ContactUs(){
    return(
        <div className="container">
        <Header head="CONTACT US"/>
            <Form className="form">
            <Row>
                <Col>
                    <Form.Control type="fname" placeholder="FIRST NAME" className="textbox"/>
                </Col>
                <Col>
                    <Form.Control type="lname" placeholder="LAST NAME" className="textbox"/>
                </Col>
            </Row>

                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="EMAIL" className="textbox"/>
                </Form.Group>

                <Form.Group>
                    <Form.Control as="textarea" rows={3} placeholder="MESSAGE" className="textbox"/>
                </Form.Group>

               <Button text="SUBMIT"/>
            </Form>
        </div>
    );
}

export default ContactUs;