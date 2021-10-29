/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
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

import Linkado from '../../assets/img/projects/linkado.jpg'
import Nutriblue from '../../assets/img/projects/nutriblue.jpg'
import Ciatoy from '../../assets/img/projects/ciatoy.jpg'

class Projects extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-shaped bg-gradient-warning">
          <Container className="py-lg-md d-flex has-cards">

            <div className="col px-0">
              <h1 className="display-3 text-white">
                Projetos
              </h1>
              <Row>
                <Col >
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg top width="100%" src={Linkado} alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase ">
                        Linkado - Grupos do zap
                          </h6>
                      <p className="description mt-3">
                        Aqui voce pode encontrar os melhores grupos do zap, fazer amizades, divulgar seus grupos, conseguir um emprego novo ou ate mesmo uma namorada atraves dos mais de 1000 links de grupos disponiveis.
                          </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          design
                            </Badge>
                        <Badge color="primary" pill className="mr-1">
                          React native
                            </Badge>
                        <Badge color="primary" pill className="mr-1">
                          NodeJs
                            </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="https://play.google.com/store/apps/details?id=com.mobird.gruposlink"
                        target="_blank"
                      >
                        Ver Site
                          </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg top width="100%" src={Nutriblue} alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Nutriblue
                          </h6>
                      <p className="description mt-3">
                        Manutenção e criação do site da plataforma vtex, foram criados carrinhos de compra, edições de checkout, produtos e duplicação do site.
                          </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Vtex
                            </Badge>
                        <Badge color="primary" pill className="mr-1">
                          JavaScript
                            </Badge>
                        <Badge color="primary" pill className="mr-1">
                          Css
                            </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="http://nutriblue.com.br/"
                        target="_blank"
                      >
                        Ver Site
                          </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg top width="100%" src={Ciatoy} alt="Card image cap" />
                    <CardBody className="py-5">
                      <h6 className="text-primary text-uppercase">
                        Ciatoy - Lego
                          </h6>
                      <p className="description mt-3">
                        Criação da landing page da lego para divulgação na loja ciatoy, criada em vtex com facilidade para alteração e page speed 80. </p>
                      <div>
                        <Badge color="primary" pill className="mr-1">
                          Vtex
                            </Badge>
                        <Badge color="primary" pill className="mr-1">
                          JavaScript
                            </Badge>
                        <Badge color="primary" pill className="mr-1">
                          Css
                            </Badge>
                      </div>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="https://www.ciatoy.com.br/lego"
                        target="_blank"
                      >
                        Ver site
                          </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>

            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Projects;
