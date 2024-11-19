import { Col, Row, Container  } from 'react-bootstrap';
import { Protocols } from './utils/Processtack';
const Process = () => {
  return (
    <section id="#Process" className="" style={{marginBottom:"100px"}}>
        <Container>
            <Row className="mx-4">
<p className="fs-5 text-warning text-center">Professional Process</p>
<p  className="fs-1  fw-light text-center">Three step <span className="fw-normal">processing</span></p>
{
       Protocols.map((ware, id) => {
        return (
          <Col  md={3} className="p-2" key={id} style={{ width:"310px", height:"400px", margin:" 20px 20px 20px 15px"}}>
          <p style={{color:"#DCDCDC"}} className="display-1">{ware.id}</p>
          <p className="fs-5 fw-normal">{ware.title}</p>
          <p className="fs-5  fw-light">{ware.details}</p>
          </Col>
          
        )
       })
      }
            </Row>
        </Container>
    </section>
  )
}

export default Process