
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
 import { Button,  Row,Form} from 'react-bootstrap';
import { useState,   useEffect } from "react";
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Appbar = ({display, showcart}:any) => {

  const [scrolled, setScrolled] = useState(false);
   const [showsearch, setShowsearch] = useState(false)
 
   const  onSearch = () => {
    
        setShowsearch(true)
  }

   
  const  offSearch = () => {
    
        setShowsearch(false)
  }
  

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  
  

 
  }, [])

 
    return (
      <>
      {showsearch ? (
        <Row>
  <Form className="border border-0 d-flex fixed-top" >
        <Form.Control     className=" shadow-none mb-2 bg-light-subtle text-black border border-0 border-bottom p-3 w-100 border-bottom my-1" type="search" placeholder="search..." />  
        <Button onClick={offSearch} variant="white" className="border  border-0  "><i className='bx bxs-x-circle bx-lg'></i></Button>
      </Form>
      {!showcart ?  ( <nav className={scrolled ? " navbar navbar-expand-lg  fixed-top " : `scrolled bg-${display} navbar-expand-lg navbar my-5 fixed-top `} >
    
      <div className="container-fluid my-3 ">
        <a className={scrolled ? "text-dark navbar-brand fs-5" : "scrolled navbar-brand fs-5text-white"}  href="/">SWIFT</a>
        <button className="shadow-none border bg-0 border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className=" "><i className='bx bx-menu bx-lg'></i></span>
        </button>
        <div className="offcanvas   offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className={scrolled ? "text-dark navbar-brand" : "scrolled offcanvas-titletext-white"}   id="offcanvasNavbarLabel">SWIFT</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav nav-tabs nav-fill border border-0 justify-content-center flex-grow-1 pe-3">
              <li className="nav-item  border border-0">
                <a className={scrolled ? "text-dark nav-link active" : "scrolled  nav-link text-white "}  aria-current="page" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/vehicle">VEHICLE FLEET</a>
              </li>
              <li className="nav-item">
                <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link  text-white "} href="/service">SERVICES</a>
              </li><li className="nav-item">
                <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link  text-white "} href="/about-us">ABOUT US</a>
              </li><li className="nav-item">
                <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/news">NEWS</a>
              </li><li className="nav-item">
                <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/shop">SHOP</a>
              </li>
              <li className="nav-item">
                <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/contact">CONTACT US</a>
              </li>
              <li className="nav-item">
                <Button variant='white'  className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "}  ><i onClick={onSearch} className='bx bx-search-alt-2'></i></Button>
              </li>
            
            </ul>
            
          </div>
        </div>
      </div>
    </nav>) :  (    <nav className={scrolled ? "bg-light-subtle navbar navbar-expand-lg  fixed-top " : `scrolled bg-${display} navbar-expand-lg navbar  fixed-top `} >
      <div className="container-fluid">
        <a className={scrolled ? "text-dark navbar-brand fs-5" : "scrolled navbar-brandtext-white fs-5"}  href="/">SWIFT</a>
        <button className=" shadow-none border border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className=""><i className='bx bx-menu bx-lg'></i></span>
        </button>
        <div className="offcanvas  offcanvas-start"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className={scrolled ? "text-dark navbar-brand" : "scrolled offcanvas-titletext-white"}   id="offcanvasNavbarLabel">SWIFT</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav nav-tabs border border-0 nav-fill justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a className={scrolled ? "text-dark nav-link active" : "scrolled  nav-link text-white "}  aria-current="page" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/vehicle">VEHICLE FLEET</a>
              </li>
              <li className="nav-item">
                <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link  text-white "} href="/service">SERVICES</a>
              </li><li className="nav-item">
                <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link  text-white "} href="/about-us">ABOUT US</a>
              </li><li className="nav-item">
                <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/news">NEWS</a>
              </li><li className="nav-item">
                <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/shop">SHOP</a>
              </li>
              <li className="nav-item">
                <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/contact">CONTACT US</a>
              </li>
              <li className="nav-item">
                <Button variant='white' onClick={onSearch} className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} ><i   className='bx bx-search-alt-2'></i></Button>
              </li>
              <li className="nav-item">
                <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/cart"><span className="text-white ">0</span><i className='bx bxs-cart bx-sm'></i></a>
              </li>
              {/* <form className="d-flex mt-0" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
    )}
       </Row>) : (<Row>

        {!showcart ?  ( <nav className={scrolled ? "bg-light-subtle navbar navbar-expand-lg  fixed-top " : `scrolled bg-${display} navbar-expand-lg navbar  fixed-top `} >
    
    <div className="container-fluid ">
      <a className={scrolled ? "text-dark navbar-brand fs-5" : "scrolled navbar-brandtext-white fs-5"}  href="/">SWIFT</a>
      <button className="shadow-none navbar-toggler border border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className=""><i className='bx bx-menu bx-lg'></i></span>
      </button>
      <div className="offcanvas  offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className={scrolled ? "text-dark navbar-brand" : "scrolled offcanvas-titletext-white"}   id="offcanvasNavbarLabel">SWIFT</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav nav-tabs nav-fill justify-content-center flex-grow-1 pe-3">
            <li className="nav-item">
              <a className={scrolled ? "text-dark nav-link active" : "scrolled  nav-link text-white "}  aria-current="page" href="/">HOME</a>
            </li>
            <li className="nav-item">
              <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/vehicle">VEHICLE FLEET</a>
            </li>
            <li className="nav-item">
              <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link  text-white "} href="/service">SERVICES</a>
            </li><li className="nav-item">
              <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link  text-white "} href="/about-us">ABOUT US</a>
            </li><li className="nav-item">
              <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/news">NEWS</a>
            </li><li className="nav-item">
              <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/shop">SHOP</a>
            </li>
            <li className="nav-item">
              <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/contact">CONTACT US</a>
            </li>
            <li className="nav-item">
              <Button variant='white' onClick={onSearch} className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "}  ><i onClick={onSearch} className='bx bx-search-alt-2'></i></Button>
            </li>
            
           
          </ul>
          
        </div>
      </div>
    </div>
  </nav>) :  (    <nav className={scrolled ? "bg-light-subtle navbar navbar-expand-lg  fixed-top " : `scrolled bg-${display} navbar-expand-lg navbar  fixed-top `} >
    <div className="container-fluid">
      <a className={scrolled ? "text-dark navbar-brand fs-5" : " fs-5 scrolled navbar-brandtext-white"}  href="/">SWIFT</a>
      <button className="shadow-none border border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className=""><i className='bx bx-menu bx-lg'></i></span>
      </button>
      <div className="offcanvas  offcanvas-start"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className={scrolled ? "text-dark navbar-brand" : "scrolled offcanvas-titletext-white"}   id="offcanvasNavbarLabel">SWIFT</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav nav-tabs nav-fill justify-content-center flex-grow-1 pe-3">
            <li className="nav-item">
              <a className={scrolled ? "text-dark nav-link active" : "scrolled  nav-link text-white "}  aria-current="page" href="/">HOME</a>
            </li>
            <li className="nav-item">
              <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/vehicle">VEHICLE FLEET</a>
            </li>
            <li className="nav-item">
              <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link  text-white "} href="/service">SERVICES</a>
            </li><li className="nav-item">
              <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link  text-white "} href="/about-us">ABOUT US</a>
            </li><li className="nav-item">
              <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/news">NEWS</a>
            </li><li className="nav-item">
              <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/shop">SHOP</a>
            </li>
            <li className="nav-item">
              <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/contact">CONTACT US</a>
            </li>
            <li className="nav-item">
              <Button variant='white' onClick={onSearch} className={scrolled ? "text-dark nav-link border border-0" : "scrolled nav-link text-white "} ><i onClick={onSearch} className='bx  bx-search-alt-2'></i></Button>
            </li>
            <li className="nav-item">
              <a className={scrolled ? "text-dark nav-link " : "scrolled nav-link text-white "} href="/cart"><p className=" text-white d-inline-flex cart">0</p><i className='bx bxs-cart bx-sm '></i></a>
            </li>
            {/* <form className="d-flex mt-0" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          </ul>
          
        </div>
      </div>
    </div>
  </nav>
  )}
       </Row>) }
    
</>
    )
}




export default Appbar