import {Container, Form, Col, Image, Row} from 'react-bootstrap';
import {  useState } from 'react';
import Appbar from '../Appbar';
import Footer from '../Footer';
import { Shopitems } from '../utils/Shop';
const Shop = () => {
     
    const [navbar] = useState("dark")
    const [showcart] = useState(false)
    
  return (
    <section>
        <Container fluid>
            
            <Appbar display={navbar} showcart={showcart} />
            <Row className="newstab">
                <Row className="mx-2">
                <Col className=" p-5 my-5 border d-flex justify-content-between bg-light-subtle"><p className="text-start fs-5 fw-medium text-black">Shop</p>
     <nav  aria-label="breadcrumb ">
    <ol className="breadcrumb  ">
    <li className="breadcrumb-item "><a className="  fs-5  text-decoration-none" href="/">Home</a></li>
    <li className="breadcrumb-item  text-decoration-underline fs-5 active" aria-current="page">Shop</li>
  </ol>
</nav>
</Col>
</Row>
<Col className=" mx-2 d-flex justify-content-between bg-light-subtle"><p className="text-black text-start">Showing 1–12 of 16 results</p><p className="text-black text-end">Default sorting
<Form.Select aria-label="Default select example">
      <option>Default sorting</option>
      <option value="1">Sort by Popularity</option>
      <option value="2">Sort by Average rating</option>
      <option value="3">Sort by newness</option>
      <option value="2">Sort by price: low  to high</option>
      <option value="3">Sort by price:high to low</option>
    </Form.Select></p></Col>
   
    <Row className=" my-3 mx-1">
        {
            Shopitems.map( (shop, id) =>{
                return(
                    <Col style={{}} sm={12} md={4} lg={3} key={id} className="mx-0">
                        <Image src={shop.img} fluid />
                        <p className="text-black fw-medium">{shop.title}</p>
                        <p><i className='bx bx-pound'></i>{shop.price}</p>
                    </Col>
                )
            })
        }
    </Row>


            </Row>
        </Container>
        <Footer />
    </section>
  )
}

export default Shop