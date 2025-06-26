import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there! I'm <span className="purple">Ayush Jha</span> from
            <span className="purple"> Kolkata, India</span>. <br />
            Currently in my final year of <b>B.Tech in CSE</b> at
            <b> IEM Kolkata</b>, I’m passionate about building clean, modern
            digital interfaces.
            <br />
            <br />
            I'm open to exciting <b>freelance</b> and{" "}
            <b>collaborative projects</b> — especially those that blend
            creativity with code.
            <br />
            <br />
            <span className="purple">Outside coding, I love:</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket Analytics
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Poems
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Literature
            </li>
          </ul>

          <p className="mt-3" style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            “Turning designs into seamless interfaces.” ✨
          </p>
          <footer className="blockquote-footer">Ayush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
