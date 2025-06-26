import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/bookloop.png";
import bitsOfCode from "../../Assets/Projects/interview.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={chatify}
              isBlog={false}
              title="AI Interview Coach"
              description="AI Interview Coach is an intelligent,web-based platform designed to help users prepare effectively for job interviews.
              It offers real-time mock interview sessions using webcam and microphone, 
              alongside AI-powered question-and-answer interactions that adapt to the user's performance.The platform offers specialized quizzes tailored to specific domains, providing immediate feedback to users. It also features a resume-driven profile tracker to monitor personal growth."
              ghLink="https://github.com/ayusssh01/AI-Interview-Coach"
              demoLink="https://ai-interview-coach-jha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bookloop"
              description="Bookloop is a community-driven platform designed to promote book sharing, exchanging, and discovering new reads among avid readers. It allows users to list books they own, browse books others are offering, and initiate seamless swaps or borrow requests. With personalized recommendations, user reviews, and a location-aware book loop network, Bookloop makes reading more social, sustainable, and affordable."
              ghLink="https://github.com/ayusssh01/Bookloop"
              demoLink="https://youtu.be/flU55jYHGmY?si=NSS1V5mzw-1lWOd7"
             
            />
          </Col>

          
          

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
