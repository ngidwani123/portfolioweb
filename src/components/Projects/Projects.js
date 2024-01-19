import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import heatmap from "../../Assets/Projects/heatmap.jpeg";
import sentiment from "../../Assets/Projects/sentiment.png";
import verizon from "../../Assets/Projects/verizon.png";
import fintech from "../../Assets/Projects/fintech.png";
import cuprobotics from "../../Assets/Projects/cuprobotics.jpeg";
import ctc from "../../Assets/Projects/ctc.jpeg";
import motion from "../../Assets/Projects/motion.png";
import ocamlcasino from "../../Assets/Projects/ocamlcasino.png";
import fmp from "../../Assets/Projects/fmp.png";
import oddscalc from "../../Assets/Projects/oddscalc.jpeg";
import ExperienceCard from "./ExperienceCard";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      {/* Experience Section */}
      <Container>
        <h1 className="project-heading">
          My Professional <strong className="purple">Experience</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="experience-card">
            <ExperienceCard
                title="Software Engineer Intern"
                company="Verizon"
                description="May 2023 - Aug 2023"
                logoClass= ""
                logoPath={verizon} // Use the imported logo image
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="experience-card">
            <ExperienceCard
                title="Engineering Team Lead"
                company="Cornell FinTech Club"
                description="Feb 2023 - Present"
                logoPath={fintech} // Use the imported logo image
                logoClass= "-small"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="experience-card">
            <ExperienceCard
                title="Machine Learning Engineer"
                company="Cornell Cup Robotics"
                description="Sept 2021 - Present"
                logoPath={cuprobotics} // Use the imported logo image
                logoClass= "-small"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="experience-card">
            <ExperienceCard
                title= "Tech Consultant"
                company="Cornell Tech Consulting"
                description="Feb 2023 - Present"
                logoPath={ctc} // Use the imported logo image
                logoClass= ""
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={true}
              title="Stock Sentiment Analysis Dashboard"
              description="Developed a web application to display realtime stock sentiment analyis using finacial data APIs. This project leveraged a tech stack that combined HTML, CSS, JavaScript, React.js, Node.js, and Python for sentiment analysis. We aimed to empower student investors with data-driven insights for their stock market decisions."
              ghLink="https://github.com/ngidwani123/stocksentiment"
              demoLink="."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heatmap}
              isBlog={true}
              title="KPI Heatmap @ Verizon"
              description="Developed a scalable application to report KPI data for 100+ internal Verizon applications, delivering critical visual insights for data-driven management decisions. Enhanced efficiency using a PostgreSQL database for 10,000+ metrics and designed a Spring Boot Java API for seamless system communication. "
              ghLink="."
              demoLink="."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={motion}
              isBlog={true}
              title="Motion Blur/Toon Shading Demo"
              description="Developed a demo to showcase the effects of motion blur and toon shading on a 3D model. This project leveraged a tech stack that combined TypeScript, OpenGL, and GLSL. I aimed to demonstrate the effects of motion blur and toon shading on a 3D model."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocamlcasino}
              isBlog={true}
              title="OCaml Casino Suite"
              description="
In my Casino Application project, I leveraged OCaml as the primary language to create a captivating gaming experience, offering Blackjack and Roulette games. My tech stack included game logic development, an efficient game state management system, and a strong focus on testing and automation, resulting in an impressive 99.5% code test coverage rate. This project highlights my proficiency in OCaml and showcases my dedication to quality software development."
              ghLink="https://github.com/ngidwani123/OCaml-Casino"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oddscalc}
              isBlog={true}
              title="Poker Equity Calculator "
              description="
              Developed a web-based poker odds calculator using HTML, CSS, React.js, and Node.js, featuring efficient API calls for accurate mathematical simulations. The project includes a user-friendly interface designed with React.js, optimized for all devices, and allows users to simulate various stages of Texas Holdem Poker for realistic game analysis."
              ghLink="https://github.com/ngidwani123/PokerApp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fmp}
              imgStyle={{ width: '400px', height: 'auto', marginBottom: '40px', marginTop: '30px'}}
              isBlog={true}
              title="Find My Party"
              description= "Achieved 2nd Place Overall App in Cornell University's App Dev Hack Challenge FA 2021. Led the frontend development of an iOS application using XCode and SwiftUI, featuring Google Maps SDK integration for enhanced user interaction. Contributed to backend development using Flask and SQL-Alchemy ORM, with Firebase for authentication and image storage. Employed agile methodologies to successfully deploy the full-stack solution on Heroku."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
