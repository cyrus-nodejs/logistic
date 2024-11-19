
import {Container, Button, Form, Col, Image,  Row} from 'react-bootstrap';
import Logistic from "../assets/images/logistic5.jpg"
import Appbar from '../Appbar';
import Footer from '../Footer';
const Contact = () => {
  return (
    <section className="banner"  id="service" >
        <Container fluid>
            <Appbar display={undefined} showcart={undefined} />
            <Image src={Logistic}  className="vh-100 w-100" />
            <Row className="bottom-left">
            <p className="text-light fw-normal font-monospace  display-4">CONTACT</p>
              <nav aria-label="breadcrumb ">
  <ol className="breadcrumb text-light ">
    <li className="breadcrumb-item "><a className="  fs-5 text-light text-decoration-none" href="/">Home</a></li>
    <li className="breadcrumb-item text-light text-decoration-underline fs-5 active" aria-current="page">Contact</li>
  </ol>
</nav>
            </Row>
        <Row className="vehicletab " >
       
            <Row className="py-5 mx-0">
            <Col sm={12} md={12} lg={6} className="m-0 p-5 ">
            <p className="text-warning">Get in touch</p>
            <p className="text-black  fs-5">Feel free to talk to our representative at any time you please use our contact form on our website or one of our contact numbers.</p>
            <p className="text-secondary fw-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a convallis ligula. Integer tincidunt ligula a purus volutpat gravida. Proin sollicitudin bibendum nibh. Suspendisse potenti. Aliquam sed erat molestie, pretium nisl nec, aliquam ipsum. Nam quis aliquam est, suscipit suscipit ipsum.</p>
            <p className=""><i className='bx bx-map' ></i>The vehicle fleet consists of over 70</p>
            <p className=""><i className='bx bxs-phone' ></i>
+386 40 222 455</p>
            <p className=""><i className='bx bx-envelope' ></i>mail@companyname.com
</p>
            </Col>
            <Col sm={12} md={12} lg={6} className="border border-5 m-0 p-5">
                <p className="text-black fs-5 fw-medium">Contact us</p>
                <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Col sm="10">
          <Form.Control type="text" placeholder="Name*" />
        </Col>
      </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Col sm="10">
          <Form.Control type="text" placeholder="Subject*" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Col sm="10">
          <Form.Control type="password" placeholder="Email*" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Col sm="10">
          <Form.Control as="textarea" rows={5} placeholder="Message*" />
        </Col>
      </Form.Group>
      <Button className="d-inline-flex" variant="warning">SEND MESSAGE</Button>
    </Form>
            </Col>
            </Row>
            </Row>
        </Container>
        <Footer  />
    </section>
  )
}

export default Contact