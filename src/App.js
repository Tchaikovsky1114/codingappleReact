import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Data from './data';
import Quote from './quote';
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel,
} from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import DetailPage from './Detail.js';
function App() {
  const [service, setService] = useState(Data);
  const [banners, setBanner] = useState(Quote);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar bg="light" expand={false}>
            <Container fluid>
              <Navbar.Brand href="#">IDEA Holdings</Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link>
                      <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/detail">Modern Basic</Link>
                    </Nav.Link>
                    <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                      <NavDropdown.Item>Action</NavDropdown.Item>
                      <NavDropdown.Item>Another action</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>Something else here</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>

          <Carousel className="carousel">
            {banners.map((x, i) => {
              return (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-100 title-img"
                    src={x.src}
                    alt="noalt"
                  />
                  <Carousel.Caption>
                    <h3 className="slide-title">{x.title}</h3>
                    <p className="slide-desc">{x.desc}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div className="container card-container">
            <div className="row">
              {service.map((x, i) => {
                return <ProductCard service={service[i]} i={i} key={i} />;
              })}
            </div>
          </div>
        </Route>
        <Route path="/detail">
          <Navbar bg="light" expand={false}>
            <Container fluid>
              <Navbar.Brand>
                <Link to="/">IDEA Holdings</Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link>
                      <Link to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/detail">Modern Basic</Link>
                    </Nav.Link>
                    <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                      <NavDropdown.Item>Action</NavDropdown.Item>
                      <NavDropdown.Item>Another action</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item>Something else here</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          <DetailPage></DetailPage>
        </Route>
        <Route path="/:id">
          <div>나는말야</div>
        </Route>
      </Switch>
      {/* <Route path="/blar" component={Modal}></Route> */}
    </div>
  );
}
function ProductCard(props, i) {
  return (
    <div className="col-md-4">
      <h3>{props.service.title}</h3>
      <p>{props.service.content}</p>
      <p>{props.service.price}</p>
    </div>
  );
}

export default App;
