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
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="page">
        <h1 className="title">Adam Kaufman's Portfolio</h1>
        <h2 className="intro">My Techstack:</h2>
        <div className="all">
        <div className="techstack">
              <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 className="logo" />
                <p style={{ fontSize: "1.2em" }}>JavaScript</p>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiNodejs className="logo" />
                <p style={{ fontSize: "1.2em" }}>node.js</p>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiReact className="logo" />
                <p style={{ fontSize: "1.2em" }}>React.js</p>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiPython className="logo" />
                <p style={{ fontSize: "1.2em" }}>Python</p>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiDjango className="logo" />
                <p style={{ fontSize: "1.2em" }}>Django</p>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiMongodb className="logo" />
                <p style={{ fontSize: "1.2em" }}>MongoDB</p>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiPostgresql className="logo" />
                <p style={{ fontSize: "1.2em" }}>PostgreSQL</p>
              </Col>
              <Col xs={4} md={2} className="tech-icons">
                <DiGit className="logo" />
                <p style={{ fontSize: "1.2em" }}>Git</p>
              </Col>
        </div>
        </div>
        <div className="look">Checkout some of my <NavLink to="/projects"><span>Projects</span></NavLink>.</div>
      </div>
    </>
  );
}

export default Home;
