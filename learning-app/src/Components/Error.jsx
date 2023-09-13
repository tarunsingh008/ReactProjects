import React from "react";
import { Link } from 'react-router-dom';
import "../CSS/Error.css";

const Error = ({ errorCode = 404, errorMessage = "Page not found" }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <img
          src="https://example.com/error-image.png" // Replace with your own image URL
          alt="Error"
          className="error-image"
        />
        <h1 className="error-heading">Oops! An Error Occurred</h1>
        <p className="error-code">Error Code: {errorCode}</p>
        <p className="error-message">{errorMessage}</p>
        <p className="error-description">
          Something went wrong while processing your request. Please try again later.
        </p>
        <Link to="/" className="error-button">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};
export default Error;