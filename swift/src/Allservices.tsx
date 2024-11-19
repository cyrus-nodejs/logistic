
import { Col, Container, Row } from 'react-bootstrap';
import Allimage from "./assets/images/allimage.jpg"
const Allservices = () => {
  return (
    <section>
        <Container fluid>
            <p className='fs-5 text-center'>View all services</p>
            <Row className="p-5"  style={{margin:"50px 0px"}}>
                <Col sm={12} md={6} lg={6} className="p-5" style={{ backgroundImage: `url(${Allimage})`, height:"20rem" }}></Col>
                <Col sm={12} md={6} lg={6} className="">
                <Row>
                    <p className="fs-2 fw-bold">Safe and on time delivery of your goods dolor sit amet
</p>  
<p className="fs-6 ">Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore magna aliqua ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore.</p>
               <Col>Lorem ipsum dolor
Lorem ipsum dolor sit adipisicing eiusmod tempor ut labore et dolore</Col>
               <Col>Lorem ipsum dolor
Lorem ipsum dolor sit adipisicing eiusmod tempor ut labore et dolore.

MORE INFO</Col>
                </Row>
                
                </Col>
            </Row>
        </Container>
        
    </section>
  )
}

export default Allservices;