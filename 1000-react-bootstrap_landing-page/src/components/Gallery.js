import { Card, Row, Button, Col } from "react-bootstrap";

const textArray = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia veniam suscipit accusantium quibusdam dicta nesciunt esse? Id itaque incidunt sint distinctio voluptatem tempore tempora aliquam sunt, vel, repellat velit. Vel!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia",
  "Lorem ipsum dolor sit amet consectetur adipisicin",
  "",
  "",
];

export default function Gallery() {
  return (
    <Row md={3} className="my-5 g-3">
      {textArray.map((text) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/400/300" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>{text}</Card.Text>
              <Button variant="outline-primary">Click me!</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
