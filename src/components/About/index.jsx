
import React from "react";
// reactstrap components
import {
  Card,
  CardBody,
  CardImg,
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Progress,
  Badge,
} from "reactstrap";

import classnames from "classnames";

class About extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid align-items-center">
              <Col className="order-md-2" md="6">
                <img
                  alt="..."
                  className="img-fluid floating  rounded-circle"
                  src={require("assets/img/brand/profile.png")}
                />
              </Col>
              <Col className="order-md-1" md="6">
                <div className="pr-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                    <i className="ni ni-circle-08" />
                  </div>
                  <h3>Quem sou eu</h3>
                  <p>
                    Apaixonado por tecnologia e games, tenho 25 anos e atuo como desenvolvedor desde 2018.
                    </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge
                            className="badge-circle mr-3"
                            color="success"
                          >
                            <i className="ni ni-badge" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">
                            Engenheiro de software na Liv Up
                            </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <Badge
                            className="badge-circle mr-3"
                            color="success"
                          >
                            <i className="ni ni-hat-3" />
                          </Badge>
                        </div>
                        <div>
                          <h6 className="mb-0">Analise e desenvolvimento de sistemas na Fiap</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

      </>
    );
  }
}

export default About;
