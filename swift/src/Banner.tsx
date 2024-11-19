
import { Col, Container, Row, Image, Button  } from 'react-bootstrap';
import Banner1 from "./assets/images/final6.jpg"
import Fork from "./assets/images/forkbg.png"
const Banner = () => {
  return (
    <section id="banner" className="banner container"  >
       <Image  className="vh-100 w-100"src={Banner1} />
        <Container fluid >
            <Row className="p-2" >
             
                <Col className="top-left" sm={12} md={6} style={{marginTop:"5rem"}} >
               <Row style={{marginTop:"2rem"}} >
               <p className="display-4 text-light  " >Professional Warehouse</p>
               <p className="display-4 text-light  fw-normal">CARGO TRANSPORT</p>
               <p className="fs-5 fw-normal text-light">We make your cargo transport simple!</p>
               </Row>
               <Button  className='d-inline mx-auto' variant="warning" size="lg">GET A QUOTE</Button> 
               </Col> 
               
               <Col className="d-none d-md-block bottom-right" sm={12} md={6} lg={6} style={{marginTop:"10rem"}}><Image className=" " fluid  src={Fork} /></Col>
            </Row>
            
       
        </Container>
    </section>
   
   
  )
}

export default Banner