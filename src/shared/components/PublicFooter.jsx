import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function PublicFooter() {
  return (
    <footer className="bg-dark text-center text-light text-lg-start mt-auto">
      <Container className="">
        <Row className="gy-4">
          <Col md={4} className="mt-5">
            <h5 className="fw-bold">TechCorp</h5>
            <p>Building technology future of techlonogy</p>
            <p className="text-secondary">Ho Chi Minh City, Vietnam</p>
          </Col>
          <Col md={6} className="mt-5">
            <Row className="gy-4">
              <Col md={4}>
                <h5>Contact Us</h5>
                <p>Email: info@techcorp.com</p>
                <p>Phone: (123) 456-7890</p>
              </Col>
              <Col md={4}>
                <h5>Company</h5>
                <p>Learn more about TechCorp and our mission.</p>
              </Col>
              <Col>
                <h5>Career</h5>
                <p>Address: 123 Tech Street, Silicon Valley, CA</p>
              </Col>
            </Row>
          </Col>
          <Col md={2} className="mt-5">
            <h5>Follow Us</h5>
            <p>
              <a href="#">Facebook</a> | <a href="#">Twitter</a> |{" "}
              <a href="#">LinkedIn</a>
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="text-muted">
              &copy; {new Date().getFullYear()} TechCorp. All rights reserved.|
              Privacy Policy | Terms of Service
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
