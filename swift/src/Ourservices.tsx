import { Col, Container, Carousel,  Image  } from 'react-bootstrap';


import truck1 from "./assets/images/truck1.jpg"
import truck2 from "./assets/images/truck2.jpg"
import truck3 from "./assets/images/truck3.jpg"
import truck4 from "./assets/images/truck4.jpg"
import truck5 from "./assets/images/truck5.jpg"
import truck6 from "./assets/images/truck6.jpg"
import truck7 from "./assets/images/truck7.jpg"
import truck8 from "./assets/images/truck8.jpg"
import truck9 from "./assets/images/truck9.jpg"

const Ourservices = () => {
  return (
    <section>
 <Container>
    <Col sm={12} style={{margin:"100px 0px"}}> 
    <p className="fs-5 text-center text-warning">Our Services</p>
        <p className="fs-1 fw-normal text-center">The complete <span className="fw-bold">solution</span></p>

         <Carousel>
      
      <Carousel.Item>
        <Image className="img" src={truck1} height="250"
        width="300"/>
        <Image className='img' src={truck2} height="250"
        width="300"/>
        <Image className='img' src={truck3} height="250"
        width="300" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="img"  src={truck4} height="250"
        width="300"/>
        <Image className='img' src={truck5} height="250"
        width="300"/>
        <Image className='img' src={truck6} height="250"
        width="300" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className="img" src={truck7} height="250"
        width="300"/>
        <Image className="img" src={truck8} height="250"
        width="300"/>
        <Image className="img" src={truck9} height="250"
        width="300" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
         

        </Col>
    
</Container> 
    </section>
  )
}

export default Ourservices;