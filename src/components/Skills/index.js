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
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Progress
} from "reactstrap";

class Skills extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-shaped ">
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <h1 className="display-3 text-black">
                Skills
                  </h1>
              <Row>
                <Col >
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-label">
                        <span>Javascript</span>
                      </div>
                    </div>
                    <Progress max="100" value="75" color="default" />
                  </div>
                </Col>
                <Col>
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-label">
                        <span>CSS</span>
                      </div>
                    </div>
                    <Progress max="100" value="60" />
                  </div>
                </Col>
                <Col>
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-label">
                        <span>HTML</span>
                      </div>
                    </div>
                    <Progress max="100" value="80" color="info" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-label">
                        <span>React Native</span>
                      </div>
                    </div>
                    <Progress max="100" value="80" color="warning" />
                  </div>
                </Col>
                <Col>
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-label">
                        <span>React JS</span>
                      </div>
                    </div>
                    <Progress max="100" value="50" color="success" />
                  </div>
                </Col>
                <Col>
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-label">
                        <span>Node JS</span>
                      </div>
                    </div>
                    <Progress max="100" value="40" color="" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-label">
                        <span>Vtex</span>
                      </div>
                    </div>
                    <Progress max="100" value="70" color="primary" />
                  </div>
                </Col>
                <Col>
                  {/* <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-label">
                        <span>Node JS</span>
                      </div>
                    </div>
                    <Progress max="100" value="40" color="info" />
                  </div> */}
                </Col>
                <Col>
                  {/* <div className="progress-wrapper">
                    <div className="progress-info">
                      <div className="progress-label">
                        <span>Node JS</span>
                      </div>
                    </div>
                    <Progress max="100" value="40" color="danger" />
                  </div> */}
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Skills;
