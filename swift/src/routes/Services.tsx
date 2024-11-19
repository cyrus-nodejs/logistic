
import {Container, Button, Col, Image, Row} from 'react-bootstrap';
import Logistic from "../assets/images/logistic5.jpg"
import { Service } from '../utils/Service';
import Appbar from '../Appbar';
import Footer from '../Footer';

const Services = () => {
  
  return (
    <section  className="banner" id="service" >
       <Appbar display={undefined} showcart={undefined} />
        <Container fluid>
          <Image src={Logistic} className="vh-100 w-100" />
        <Row className="bottom-left">
<p className="text-light fw-normal  display-4">SERVICES</p>
              <nav  aria-label="breadcrumb ">
  <ol className="breadcrumb text-light ">
    <li className="breadcrumb-item "><a className="  fs-5 text-light text-decoration-none" href="/">Home</a></li>
    <li className="breadcrumb-item text-light text-decoration-underline fs-5 active" aria-current="page">Services</li>
  </ol>
</nav>
        </Row>
            
                
                <Row className="vehicletab" >
                
</Row>
<Row className="py-5 my-3 mx-1">
{
    Service.map((item, id) =>{
        return(
            <Col key={id} sm={12} md={6} lg={4}>
       <Image src={item.img} fluid className="serviceimg" />
            <p className="fs-5">{item.title}</p>
            <p className="secondary">{item.description}</p>
            <p>{item.details}</p>
            </Col>
        )
    })

}

</Row>
           <Col>
           
<Col className="" style={{margin:""}}>
<p className="text-center fs-4 fw-normal">Feel free to contact us anytime you need</p>
  <p className="text-center">Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore magna aliqua ad
minim veniam, quis nostrud exercitation adipisicing labore et dolore.
</p> 
<p className="text-center"><Button className="px-5" variant="warning" size="lg" style={{}}>Quote</Button></p>
</Col>
           </Col> 

            
            
        </Container>
        
        <Footer />
    </section>
  )
}

export default Services