import { Component } from "react";
import { Col, Row, Input, Label, Button, Form, FormGroup } from "reactstrap";
import Faq from "./Faq";
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      subject: "",
      body: "",
      agree: false,
      method: "sms",
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  inputHandler = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    this.setState({
      [e.target.name]: value,
    });
  };

  submitHandler = (e) => {
    console.log(this.state);
    e.preventDefault();
  };

  render() {
    document.title = "Contact";
    return (
      <div className="container">
        <Row className="py-2">
          <Col>
            <h2>Contact Us</h2>
            <Form onSubmit={this.submitHandler}>
              <FormGroup>
                <Label htmlFor="name">Name:</Label>
                <Input
                  required
                  id="name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.inputHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="phone">Phone:</Label>
                <Input
                  required
                  id="phone"
                  name="phone"
                  type="tel"
                  value={this.state.phone}
                  onChange={this.inputHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email:</Label>
                <Input
                  required
                  id="email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.inputHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="subject">Subject:</Label>
                <Input
                  required
                  id="subject"
                  name="subject"
                  type="text"
                  value={this.state.subject}
                  onChange={this.inputHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="body">Body:</Label>
                <Input
                  required
                  id="body"
                  name="body"
                  type="textarea"
                  style={{ resize: "none" }}
                  value={this.state.body}
                  onChange={this.inputHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label check>
                  <Input
                    required
                    id="agree"
                    name="agree"
                    type="checkbox"
                    value={this.state.agree}
                    onChange={this.inputHandler}
                  />{" "}
                  <strong>Agree to Terms and Conditions</strong>
                </Label>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="method">Contact Method:</Label>
                <Input
                  required
                  id="method"
                  name="method"
                  type="select"
                  value={this.state.method}
                  onChange={this.inputHandler}
                >
                  <option>SMS</option>
                  <option>CALL</option>
                  <option>EMAIL</option>
                </Input>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
          <Col>
            <Faq />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Contact;
