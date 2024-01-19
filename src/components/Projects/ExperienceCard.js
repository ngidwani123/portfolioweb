import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCard({ title, company, description, logoPath, logoClass }) {
    return (
        <Card className="experience-card">
            <div className="experience-logo-container">
                <img src={logoPath} alt="company-logo" className={`experience-logo${logoClass}`}  />
            </div>
            <Card.Body className="experience-details">
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2">{company}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ExperienceCard;
