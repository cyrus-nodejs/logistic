
import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from './Appbar'
import { Col, Container, Row,  } from 'react-bootstrap';
import Banner from './Banner';
import Warehouse from './Warehouse';
import Services from './Services';
import Ourservices from './Ourservices';
import Allservices from './Allservices';
import Process from './Process';
import Footer from './Footer';
const Home = () => {
  return (
<Container fluid>
<Col className="" >
<Appbar display={undefined} showcart={undefined} />
<Row>

  <Banner /> 
  </Row>
 <Row> <Warehouse /> </Row>
  <Row><Services /> </Row>
 <Row> <Ourservices/></Row>
 <Row> <Allservices /></Row>
 <Row> <Process /></Row>
 <Row> <Footer /></Row>
  </Col>
    
</Container>
  
  )
}

export default Home