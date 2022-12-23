import "./styles/Home.css";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDjango,
  DiPostgresql,
} from "react-icons/di";

function Home() {
  return (
    <>
      <div className="page">
        <h1 className="title">Adam Kaufman's Portfolio</h1>
        <h2 className="intro">My Techstack:</h2>
        <div className="all">
        <div className="techstack">
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 className="logo" />
                <p style={{ fontSize: "1.2em" }}>JavaScript</p>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiNodejs className="logo" />
                <p style={{ fontSize: "1.2em" }}>node.js</p>
              </Col>
            </Row>
            </div>
            <div className="second">
              <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              <Col xs={4} md={2} className="tech-icons">
                <DiReact className="logo" />
                <p style={{ fontSize: "1.2em" }}>React.js</p>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiPython className="logo" />
                <p style={{ fontSize: "1.2em" }}>Python</p>
              </Col>
            </Row>
          </div>
          <div className="holder">
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              <Col xs={4} md={2} className="tech-icons">
                <DiDjango className="logo" />
                <p style={{ fontSize: "1.2em" }}>Django</p>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiMongodb className="logo" />
                <p style={{ fontSize: "1.2em" }}>MongoDB</p>
              </Col>
            </Row>
            </div>
            <div className="fourth">
              <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              <Col xs={4} md={2} className="tech-icons">
                <DiPostgresql className="logo" />
                <p style={{ fontSize: "1.2em" }}>PostgreSQL</p>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiGit className="logo" />
                <p style={{ fontSize: "1.2em" }}>Git</p>
              </Col>
            </Row>
        </div>
        </div>
      </div>
    </>
  );
}

export default Home;
