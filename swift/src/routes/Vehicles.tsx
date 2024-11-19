import Truckbg from "../assets/images/final2.jpg"
import Appbar from "../Appbar";
import {Container,Button, Col, Image, Nav, Tab, Row} from 'react-bootstrap';

import Allvehicles from "./vehiclegallery/Allvehicles";
import Shorttrucks from "./vehiclegallery/Shortrucks";
import Primetrucks from "./vehiclegallery/Primetrucks";
import Bigloadtrucks from "./vehiclegallery/Bigloadtrucks";
import female from "../assets/images/female.jpg"
import Footer from "../Footer";

const Vehicles = () => {
  return (
    <section   className="banner " id="vehicle " >
        <Appbar display={undefined} showcart={undefined} />
      <Container fluid >
      <Image src={Truckbg} className="vh-100 w-100"    />
    
   
   
    <Row className="bottom-left">
    <p className=" fw-normal text-light font-monospace  display-4">VEHICLE FLEET</p>
              <nav aria-label="breadcrumb ">
  <ol className="breadcrumb text-light ">
    <li className="breadcrumb-item "><a className="  fs-5  text-decoration-none" href="/">Home</a></li>
    <li className="breadcrumb-item text-light  text-decoration-underline fs-5 active" aria-current="page">Vehicle fleet</li>
  </ol>
</nav>
            
    </Row>
    <Row className=" mx-4" >
             
<Row className=" mt-2">
<Tab.Container id="left-tabs-example" defaultActiveKey="all"   >
      <Row>
          <Nav variant="tab" className="  "  >
            <Nav.Item className="border">
              <Nav.Link className=" text-reset " eventKey="all">All</Nav.Link>
            </Nav.Item>
            <Nav.Item className="border">
              <Nav.Link className="border-dark text-reset" eventKey="shorttrucks">Short trucks</Nav.Link>
            </Nav.Item >
            <Nav.Item className="border">
              <Nav.Link className="border-dark text-reset" eventKey="primetrucks">Prime trucks</Nav.Link>
            </Nav.Item>
            <Nav.Item className="border">
              <Nav.Link className="border-dark text-reset" eventKey="bigloadtrucks">Big load trucks</Nav.Link>
            </Nav.Item>
          </Nav>
      
      
          <Tab.Content className=" ">
            <Tab.Pane eventKey="all"><Allvehicles /></Tab.Pane>
            <Tab.Pane eventKey="shorttrucks"><Shorttrucks /></Tab.Pane>
            <Tab.Pane eventKey="primetrucks"><Primetrucks /></Tab.Pane>
            <Tab.Pane eventKey="bigloadtrucks"><Bigloadtrucks /></Tab.Pane>

          </Tab.Content>

      </Row>
      
    </Tab.Container>
    <Row className="py-5 my-3 mx-1">
        <Col sm={12} md={6} lg={6} className="m-0" style={{ backgroundImage: `url(${female})`, height:"25rem"  }} >
        </Col>
        <Col sm={12} md={6} lg={6} className="m-0">
     <p className="fs-4 fw-normal text-black">Safe and on time delivery</p>
     <p className="text-secondary fs-5">Sit amet adipisicing eiusmod tempor elementum ut labore et dolore magna aliqua ad minim veniam, quis nostrud exercitation.</p>
     <p className="text-secondary fw-medium">Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore magna aliqua ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore.</p>
     <p className="fw-medium text-dark">John Doe</p>
     <p>Chief Executive Officer</p>
        </Col>
      </Row>
<Col className="" style={{margin:""}}>
<p className="text-center fs-4 fw-normal">Feel free to contact us anytime you need</p>
  <p className="text-center">Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore magna aliqua ad
minim veniam, quis nostrud exercitation adipisicing labore et dolore.
</p> 
<p className="text-center"><Button className="mx-auto p-2" variant="warning" size="lg" style={{}}>Quote</Button></p>
</Col>
</Row>
            
              
          

          </Row>
          
            </Container>
            <Footer />
            </section>
  
  )
}

export default Vehicles