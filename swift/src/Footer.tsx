import { Col, Container, Row  } from 'react-bootstrap';

const Footer = () => {
  return (
    <section id="footer" className="bg-dark p-5 text-light">
        <Container>
            <Row>
                <Col className="" sm={12} md={3}>
                <Row>
                <p className=' '>ABOUT COMPANY</p>
                <p className='h6 '>About Us</p>
                <p className='fs-6'>News</p> 
                <p className='fs-6'>Vehicle fleet</p>
                <p className='fs-6'>Vehicle service</p>
                <p className='fs-6'>Contact us</p>
                </Row>
                </Col>
                <Col sm={12} md ={3}>
                <Row>
                <p className=' '>NAVIGATION</p>
                <p className='fs-6'>News</p> 
                <p className='fs-6'>Vehicle fleet</p>
                <p className='fs-6'>Vehicle service</p>
                <p className='fs-6'>Contact us</p>
                </Row>
                </Col>
                <Col sm={12} md={3}>
                <Row>
                <p className=''>RESOURCES</p>
                <p className='fs-6'>News</p> 
                <p className='fs-6'>Vehicle fleet</p>
                <p className='fs-6'>Vehicle service</p>
                <p className='fs-6'>Contact us</p>
                </Row>
                </Col>
                <Col sm={12} md={3}>
                <Row >
                <p className=' '>OUR CONTACTS</p>
                <p className='fs-6'>News</p> 
                <p className='fs-6'>Vehicle fleet</p>
                <p className='fs-6'>Vehicle service</p>
                <p className='fs-6'>Contact us</p>
                </Row>
                </Col>
                
                
            </Row>
        </Container>
    </section>
  )
}

export default Footer