import React, { useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";

const CandidateRegister = () => {
  return (
    <Card className="p-4 shadow-sm border rounded-4" style={{ width: "500px" }}>
      <h1 className="text-center fw-bold">Create Account</h1>
      <h4 className="text-center text-muted fs-6 pb-3">
        Join us to manage and track your job applications
      </h4>

      <Button
        variant="outline-dark"
        className="w-100 mb-3 d-flex align-items-center justify-content-center"
      >
        Sign up with Google
      </Button>
      <Button
        variant="primary"
        className="w-100 mb-3 d-flex align-items-center justify-content-center"
      >
        Continue with LinkedIn
      </Button>

      <div className="text-center mb-3 text-muted small">
        Or register with email
      </div>

      <Form>
        <Form.Group className="mb-3" controlId="registerName">
          <Form.Control
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerEmail">
          <Form.Control
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="registerConfirmPassword">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" variant="success" className="w-100 py-2 fw-bold">
          Sign Up
        </Button>

        <div className="text-center mt-3 small">
          Already have an account?{" "}
          <a href="/" className="text-decoration-none fw-bold text-success">
            Sign In
          </a>
        </div>
      </Form>
    </Card>
  );
};

export default CandidateRegister;
