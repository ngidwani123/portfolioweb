import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Neil Gidwani </span>
            from <span className="purple"> Saratoga Springs, NY.</span>
            <br />
            I am currently a junior at Cornell University.
            <br />
            I am pursuing a major in Computer Science and a minor in Business.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Weightlifting
            </li>
            <li className="about-activity">
              <ImPointRight /> Robotics
            </li>
            <li className="about-activity">
              <ImPointRight /> Poker
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
