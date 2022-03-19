import { Col, Image, Row, Button } from "react-bootstrap";

export default function Main1() {
  return (
    <Row className="my-5">
      <Col md={7}>
        <Image src="https://picsum.photos/500/400" fluid />
      </Col>
      <Col md={5}>
        <h1 className="display-4">Tagline</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          veniam suscipit accusantium quibusdam dicta nesciunt esse? Id itaque
          incidunt sint distinctio voluptatem tempore tempora aliquam sunt, vel,
          repellat velit. Vel!
        </p>
        <Button variant="primary">Call to action!</Button>
      </Col>
    </Row>
  );
}
