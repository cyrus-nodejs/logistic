import {Container, Button, Col, Image, Row} from 'react-bootstrap';
import Logistic from "../assets/images/logistic5.jpg"
import Team from "../assets/images/ceo2.jpg"
import Team1 from "../assets/images/ceo.jpg"

import Appbar from '../Appbar';
import Footer from '../Footer';
import { Staffs } from '../utils/Team';

const Aboutus = () => {
  return (
    <section>
        <Container className="banner"  id="service" fluid >
        <Appbar display={undefined} showcart={undefined} />
        <Image src={Logistic} className="vh-100 w-100" />
        <Row className="vehicletab bottom-left" >
                <p className="text-light fw-normal  display-4">ABOUT US</p>
              <nav  aria-label="breadcrumb ">
  <ol className="breadcrumb text-light ">
    <li className="breadcrumb-item "><a className="  fs-5 text-light text-decoration-none" href="/">Home</a></li>
    <li className="breadcrumb-item text-light text-decoration-underline fs-5 active" aria-current="page">About us</li>
  </ol>
</nav>
</Row>
<Row className="mt-2 mx-1">
<Col  className=" p-5">
<p className="h4 fw-normal">Our Mission</p>
<p className="text-secondary">Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum labore et dolore magna aliqua ad minim veniam, nostrud quis cing eiusmod tempor elementum ut labore.</p>
<p className="d-inline-flex  "><i className='bx bx-chevron-right bx-sm'></i>More Details</p>
</Col>
<Col  className=" p-5 m-3">
<p className="h4 fw-normal">Our Vision</p>
<p className="text-secondary">Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum labore et dolore magna aliqua ad minim veniam, nostrud quis cing eiusmod tempor elementum ut labore.</p>
<p className="d-inline-flex  "><i className='bx bx-chevron-right bx-sm'></i>More Details</p>
</Col>
<Col className="border border-5 border-opacity-25 p-5">
<p className="text-secondary  h5">Professional Services</p>
<p className="fs-3 text-black fw-normal">24 Hours Support</p>

<p><i className='bx bxs-check-square' ></i>Magna risus vehi augue</p>
<p><i className='bx bxs-check-square' ></i>Facilisis magna risus</p>
<p><i className='bx bxs-check-square' ></i>Dolor sit ametconse ctetur</p>
<p><i className='bx bxs-check-square' ></i>Ametconse ctetur adipis</p>
<p><i className='bx bxs-check-square' >Facilisis magna risus</i></p>
</Col>
</Row>
<Row className="my-2">
    <Col sm={12} md={6} lg={6} className="p-3 mx-0 rounded-start-pill" style={{ backgroundImage: `url(${Team})`, height:"25rem" }}></Col>
    <Col sm={12} md={6} lg={6} className="py-5 px-3" style={{margin:'0rem 0rem'}}>
    <p className=" text-black fw-normal fs-4">Our company core values</p>
    <p className="text-secondary fs-5">Sit amet adipisicing eiusmod tempor elementum ut labore et dolore magna aliqua ad minim veniam, quis nostrud exercitation.</p>
    <p className="text-secondary ">Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore magna aliqua ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore.</p>
    <p className="text-black">John Doe</p>
    <p className=" text-secondary">Chief Executive Officer</p>
    </Col>
</Row>
<Row className="my-5 px-5">
<p className="h5 text-warning">Professional Team</p>
<p className="display-5 fw-normal">Meet our <span className="fw-medium">dedicated</span> team</p>
{Staffs.map((staff, id) =>{
    return(
  <Col sm={12} md={6} lg={3} key={id}>
  <Image src={staff.img} fluid />
  <p className="text-center fw-medium text-black">{staff.name}</p>
  <p className="text-center text-secondary">{staff.role}</p>
  </Col>
    )
})}
</Row>
<Row className="my-5 px-5">
<Col>
<p className="text-black fs-4 fw-medium">Safe and on time delivery of your goods dolor sit amet</p>
<p className="text-secondary fs-5">
Sit amet adipisicing eiusmod tempor elementum ut labore et dolore magna aliqua ad minim veniam, quis nostrud exercitation.</p>
<p className="text-secondary">Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore magna aliqua ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore.</p>
<p className=""><Button variant="warning" className="px-5" size="lg" >GET A QUOTE</Button></p>
</Col>
<Col className="p-0 mx-0 rounded-start-pill" style={{ backgroundImage: `url(${Team1})`, height:"25rem", width:"10rem" }}></Col>
</Row>
<Footer />
        </Container>
       
    </section>
  )
}

export default Aboutus;