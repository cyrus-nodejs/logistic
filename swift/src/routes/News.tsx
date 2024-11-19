import {Container, Form, Col, Image, Row} from 'react-bootstrap';
import News1 from "../assets/images/news1.jpg"
import News2 from "../assets/images/news2.jpg"
import News3 from "../assets/images/news3.jpg"
import News4 from "../assets/images/news4.jpg"
import News5 from "../assets/images/news5.jpg"
import News6 from "../assets/images/news6.jpg"

import Appbar from '../Appbar';
import Footer from '../Footer';


import {  useState } from 'react';

const News = () => {
    
    const [navbar] = useState("dark")
   
  return (
    <section  id="vehicle">
        <Container fluid>
            <Appbar display={navbar}  showcart={undefined}   />
            <Row className="newstab">
                <Row>
                <Col className=" p-5 my-5 border d-flex justify-content-between bg-light-subtle"><p className="text-start fs-5 fw-medium text-black">News</p>
<nav  aria-label="breadcrumb ">
  <ol className="breadcrumb  ">
    <li className="breadcrumb-item "><a className="  fs-5  text-decoration-none" href="/">Home</a></li>
    <li className="breadcrumb-item  text-decoration-underline fs-5 active" aria-current="page">Services</li>
  </ol>
</nav></Col>
</Row>
<Col sm={8} className="mx-3">
<p className=""> <i className='bx bx-comment '></i>0 comments <span><i className='bx bx-buildings'></i> Big buildings</span> <span><i className='bx bx-calendar' ></i>December 21, 2017</span></p>
<p className="h3 text-black fw-medium">Package Scanning</p>
<p className="text-secondary fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu commodo nisl. Etiam ut purus justo. In id ante commodo, eleifend felis non, cursus orci. Nullam suscipit pellentesque nisl. Quisque maximus dui dui, id vestibulum orci interdum in. Fusce sit amet quam et nulla sollicitudin varius nec eu turpis. Nulla posuere arcu sed elit lobortis, ac congue leo tristique.</p>
<p className="">Read More</p>
<p className=""> <i className='bx bx-comment '></i>0 comments <span><i className='bx bx-folder' ></i> Uncategorized</span> <span><i className='bx bx-calendar' ></i>December 21, 2017</span></p>
<p  className="h3 text-black fw-medium">Test</p>
<p  className="text-secondary fw-light">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
<p className="">Read More</p>
<Row className="p-5">
    <Image src={News1}  fluid/>
    <p  className="m-2"> <i className='bx bx-comment '></i>3 comments <span><i className='bx bx-folder' ></i> Projects</span> <span><i className='bx bx-calendar' ></i>December 12, 2014</span></p>
</Row>
<Row className="mx-3">
    <p className="h3 text-black fw-medium">THE GOAL FOR 2015</p>
    <p className="text-secondary fw-light">Logistic and organization are two most important things for successfully running a warehouse. Warehouse must be optimized for fast loading on the trucks and unloading from them on the arrival. There is no place for mistakes, because if one truck has to wait a minute too long, ten after them will have to wait as well. Just image what would happen if a cargo would get misplaced, or if it wouldn’t be accessible for forklift to pick it up.</p>
    <p>READ MORE</p>

</Row>
<Row className="p-5">
    <Image src={News2} />
    <p className="m-2"> <i className='bx bx-comment '></i>0 comments <span><i className='bx bx-folder' ></i> Big buildings, Home, Renovations</span> <span><i className='bx bx-calendar' ></i>December 12, 2014</span></p>
</Row>
<Row className="mx-3">
    <p className="h3 text-black fw-medium">WINTER TRUCKING</p>
    <p className="text-secondary fw-light">Logistic and organization are two most important things for successfully running a warehouse. Warehouse must be optimized for fast loading on the trucks and unloading from them on the arrival. There is no place for mistakes, because if one truck has to wait a minute too long, ten after them will have to wait as well. Just image what would happen if a cargo would get misplaced, or if it wouldn’t be accessible for forklift to pick it up.</p>
    <p>READ MORE</p>

</Row>
<Row className="p-5">
    <Image src={News3} />
    <p className="m-2"> <i className='bx bx-comment '></i>0 comments <span><i className='bx bx-folder' ></i> Big buildings, Home, Renovations</span> <span><i className='bx bx-calendar' ></i>December 12, 2014</span></p>
</Row>
<Row className="mx-3">
    <p className="h3 text-black fw-medium">STORY OF A WOMAN TRUCKER</p>
    <p className="text-secondary fw-light">Logistic and organization are two most important things for successfully running a warehouse. Warehouse must be optimized for fast loading on the trucks and unloading from them on the arrival. There is no place for mistakes, because if one truck has to wait a minute too long, ten after them will have to wait as well. Just image what would happen if a cargo would get misplaced, or if it wouldn’t be accessible for forklift to pick it up.</p>
    <p>READ MORE</p>

</Row>
<Row className="p-5">
    <Image src={News4} />
    <p className="m-2"> <i className='bx bx-comment '></i>0 comments <span><i className='bx bx-folder' ></i> Big buildings, Home, Renovations</span> <span><i className='bx bx-calendar' ></i>December 12, 2014</span></p>
</Row>
<Row className="mx-3">
    <p className="h3 text-black fw-medium">BUS DRIVE TROUGH EUROPE</p>
    <p className="text-secondary fw-light">Logistic and organization are two most important things for successfully running a warehouse. Warehouse must be optimized for fast loading on the trucks and unloading from them on the arrival. There is no place for mistakes, because if one truck has to wait a minute too long, ten after them will have to wait as well. Just image what would happen if a cargo would get misplaced, or if it wouldn’t be accessible for forklift to pick it up.</p>
    <p>READ MORE</p>

</Row>
<Row className="p-5">
    <Image src={News5} />
    <p className="m-2"> <i className='bx bx-comment '></i>0 comments <span><i className='bx bx-folder' ></i> Big buildings, Home, Renovations</span> <span><i className='bx bx-calendar' ></i>December 12, 2014</span></p>
</Row>
<Row className="mx-3">
    <p className="h3 text-black fw-medium">A TOUR OF OUR WAREHOUSE</p>
    <p className="text-secondary fw-light">Logistic and organization are two most important things for successfully running a warehouse. Warehouse must be optimized for fast loading on the trucks and unloading from them on the arrival. There is no place for mistakes, because if one truck has to wait a minute too long, ten after them will have to wait as well. Just image what would happen if a cargo would get misplaced, or if it wouldn’t be accessible for forklift to pick it up.</p>
    <p>READ MORE</p>

</Row>
<Row className="p-5">
    <Image src={News6} />
    <p className="m-2"> <i className='bx bx-comment '></i>0 comments <span><i className='bx bx-folder' ></i> Big buildings, Home, Renovations</span> <span><i className='bx bx-calendar' ></i>December 12, 2014</span></p>
</Row>
<Row className="mx-3">
    <p className="h3 text-black fw-medium ">WHAT TO KNOW WHEN PACKING YOUR CARGO</p>
    <hr />
    <p className="text-secondary fw-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu commodo nisl. Etiam ut purus justo. In id ante commodo, eleifend felis non, cursus orci. Nullam suscipit pellentesque nisl. Quisque maximus dui dui, id vestibulum orci interdum in. Fusce sit amet quam et nulla sollicitudin varius nec eu turpis. Nulla posuere arcu sed elit lobortis, ac congue leo tristique.

Integer egestas, orci vel euismod pretium, dolor lacus mollis mi, ut volutpat justo diam quis ex. Fusce lectus arcu, vehicula non risus ac, fermentum gravida justo. Morbi sit amet malesuada nisl. Donec laoreet sodales sapien. Quisque condimentum quam id felis fermentum commodo. Sed ullamcorper vehicula sapien ac gravida. Nullam tempus scelerisque odio, sed fermentum leo facilisis a. Quisque nisl metus, rutrum id neque et, sollicitudin varius risus.</p>
<figure className="text-end">
  <blockquote className="blockquote">
    <p className="fst-italic "><i className='bx-pull-left bx bxs-quote-left bx-md'/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu commodo nisl. Etiam ut purus justo. In id ante commodo, eleifend felis non, cursus orci. Nullam suscipit pellentesque nisl. Quisque maximus dui dui, id vestibulum orci interdum in.</p>
  </blockquote>
  
</figure>
    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu commodo nisl. Etiam ut purus justo. In id ante commodo, eleifend felis non, cursus orci. Nullam suscipit pellentesque nisl. Quisque maximus dui dui, id vestibulum orci interdum in. Fusce sit amet quam et nulla sollicitudin varius nec eu turpis. Nulla posuere arcu sed elit lobortis, ac congue leo tristique. Integer egestas, orci vel euismod pretium, dolor lacus mollis mi, ut volutpat justo diam quis ex. Fusce lectus arcu, vehicula non risus ac, fermentum gravida justo. Morbi sit amet malesuada nisl. Donec laoreet sodales sapien. Quisque condimentum quam id felis fermentum commodo. Sed ullamcorper vehicula sapien ac gravida. Nullam tempus scelerisque odio, sed fermentum leo facilisis a. Quisque nisl metus, rutrum id neque et, sollicitudin varius risus.</p>

</Row>

</Col>

<Col className="d-none d-md-block d-print-block" sm={3}>
<Row className="p-5" >
<Form.Control className="border border-0" size="lg" type="search" placeholder="search ...." />
<hr />
<p className="fs-5 text-black">Recent Posts</p>
<p className="text-secondary">Package Scanning</p>
<hr />
<p className="text-secondary">Test</p>
<hr />
<p className="text-secondary">A TOUR OF OUR WAREHOUSE</p>
<hr />
<p className="text-secondary">THE GOAL FOR 2015</p>
<hr />
<p className="text-secondary">WINTER TRUCKING</p>
<hr />
<p className="text-black my-3">Meta</p>
<p className="text-black my-0">Log in</p>
<p className="text-black my-0">Entries RSS</p>
<p className="text-black my-0">Comments RSS</p>
<p className="text-black my-0">Comments RSS</p>
</Row>
</Col>
            </Row>
        
        </Container>
        <Footer />
    </section>
  )
}

export default News