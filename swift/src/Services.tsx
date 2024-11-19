import { Col, Container, Form, Button, Row  } from 'react-bootstrap';
import Banner from "./assets/images/back7.jpg"
const Services = () => {
  return (
  <section style={{ backgroundImage: `url(${Banner})`}}>
    <Container>
      <Row className="" style={{background:"white", margin:"100px 0px 100px 0px"}}>
       <Col className="m-0 p-3">
        <p className="fs-3">Professional Services</p>
        <p className="fs-3 fw-bold">Get your transport quote</p>
        <Row >
          <Col className="m-2 " sm={12} md={4} lg={3} ><Form.Control type="text" placeholder="location" /></Col>
          <Col className="m-2 " sm={12} md={4} lg={3} >     <Form.Control type="" placeholder="to destination" /></Col>
          <Col className="m-2 " sm={12} md={4} lg={3} >     <Form.Control type="email" placeholder="to cargo / person" /></Col>
        </Row>
        <Row  >
          <Col className="m-2 " sm={12} md={4} lg={3} >     <Form.Control type="email" placeholder="email" /></Col>
          <Col className="m-2 " sm={12} md={4} lg={3} >     <Form.Control type="text" placeholder="contact number" /></Col>
          <Col className="m-2 " sm={12} md={4} lg={3}><Button variant="warning" size="sm" >GET A QUOTE</Button></Col>
        </Row>
        </Col>
      </Row>
    </Container>

  </section>
  )
}

export default Services