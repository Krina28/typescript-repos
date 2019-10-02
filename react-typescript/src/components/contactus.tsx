import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';

class ContactUS extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <div className="contact-info">
                        <h3>Let's Connect !!</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                        <br />
                        <p>
                            It was popularised
                            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                            and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                    </div>
                </Col>
                <Col>
                    <div className="form-div">
                        <Form className="contact-form">
                            <FormGroup row>
                                <Label for="first name" sm={2}>First Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="fname" id="fname" placeholder="First Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="last name" sm={2}>Last Name</Label>
                                <Col sm={10}>
                                    <Input type="text" name="lname" id="lname" placeholder="Last Name" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="exampleSelect" sm={2}>Email</Label>
                                <Col sm={10}>
                                    <Input type="email" name="email" id="email" placeholder="Email Address" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="message" sm={2}>Message</Label>
                                <Col sm={10}>
                                    <Input type="textarea" name="message" id="message" />
                                </Col>
                            </FormGroup>
                            <FormGroup check row>
                                <Col sm={{ size: 10, offset: 2 }}>
                                    <Button>Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default ContactUS;
