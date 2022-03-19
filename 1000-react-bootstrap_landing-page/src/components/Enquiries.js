import { Form, Row, Col, Button, FormGroup } from "react-bootstrap";
import { useState } from "react";

export default function Equiries() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="text-center">
        <h1>Get in touch!</h1>
        <p className="lead">Questions? Do not hesitate to contact us.</p>
      </div>

      <Row className="justify-content-center my-5">
        <Col md={6}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <FormGroup className="mb-4">
              <Form.Label>*E-mail</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="example@mail.com"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid e-mail address.
              </Form.Control.Feedback>
            </FormGroup>
            <FormGroup className="mb-4">
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" />
            </FormGroup>
            {
              <FormGroup className="mb-4">
                <Form.Label>*Subject</Form.Label>
                <Form.Select required>
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select a subject.
                </Form.Control.Feedback>
              </FormGroup>
            }

            <Form.Group className="mb-3">
              <Form.Label>*Your message</Form.Label>
              <Form.Control as="textarea" rows={5} required />
              <Form.Control.Feedback type="invalid">
                Please leave your message.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
