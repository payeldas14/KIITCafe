import React from "react";
import Form from "react-bootstrap/Form";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Login(){
    return (
        <div>
            <div className="login">
                <Tabs defaultActiveKey="LOGIN"  id="noanim-tab-example">
                    <Tab eventKey="LOGIN" title="LOGIN">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="EMAIL" className="textbox"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="PASSWORD" className="textbox"/>
                            </Form.Group>
            
                            <button type="submit" className="login-button">LOGIN</button>
                        </Form>
                            <p className="or">OR</p>
                            <div className="logind">
                                <div className="googl">
                                    <button style={{backgroundColor:"#1365E1",color:"white",outline:"none", borderRadius:"20px",border:"none",width:'240px',height:"30px"}} type="submit">GOOGLE</button>
                                </div>
                            
                                <div className="fb">
                                    <button style={{backgroundColor:"#1365E1", color:"white",outline:"none", borderRadius:"20px",border:"none",width:'240px',height:"30px"}} type="submit">FACEBOOK</button>
                                </div>
                            </div>
                    </Tab>
                    <Tab eventKey="SIGNUP" title="SIGNUP">
                        <Form className="form">
                            <Form.Group controlId="formBasicEmail">
                            <Form.Control type="name" placeholder="NAME" className="textbox"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                            <Form.Control type="phoneNo" placeholder="PHONE" className="textbox"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                            <Form.Control type="email" placeholder="EMAIL" className="textbox"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="PASSWORD" className="textbox"/>
                            </Form.Group>
                                <button type="submit" className="login-button">SIGNUP</button>
                        </Form>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default Login;