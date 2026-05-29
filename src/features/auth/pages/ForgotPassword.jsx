import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

const ForgotPassword = () => {
  return (
    <Card className="p-4 shadow-sm border rounded-4" style={{ width: "450px" }}>
      <h1 className="text-center fw-bold">Forgot Password?</h1>
      <h4 className="text-center text-muted fs-6 pb-4">
        Enter your email address below and we'll send you instructions to reset
        your password.
      </h4>

      <Form>
        <Form.Group className="mb-4" controlId="forgotPasswordEmail">
          <Form.Control
            type="email"
            placeholder="Enter your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Button
          type="submit"
          variant="success"
          className="w-100 py-2 fw-bold mb-3"
        >
          Send Reset Link
        </Button>

        <div className="text-center small">
          <a href="/" className="text-decoration-none fw-bold text-muted">
            ← Back to Sign In
          </a>
        </div>
      </Form>
    </Card>
  );
};

export default ForgotPassword;
