import { Col, Container, Row  } from 'react-bootstrap';
import { Wares } from './utils/Warehouse';
const Warehouse = () => {
  return (
    <section>
    <Container>
      <Row style={{margin:"1000px 0px"}}>
        <p className="fs-5 text-warning text-center">Professional Warehouse</p>
      <p className="h1 fw-light text-center">Warehouse <span className="fw-normal">solution</span> for every need</p>
      
      {
       Wares.map((ware, id) => {
        return (
          <Col md={3} className="p-2" key={id} style={{border:"7px solid whitesmoke", width:"310px", height:"400px", margin:" 20px 20px 20px 15px"}}>
          <p className="fs-6 text-warning">{ware.title}</p>
          <p className="fs-3 fw-normal">{ware.description}</p>
          <p className="fs-5 fw-light">{ware.details}</p>
          <p className="fs-5 fw-light  text-truncate">Read more</p>
          </Col>
          
        )
       })
      }
      </Row>
    </Container>
      
    </section>
  )
}

export default Warehouse;