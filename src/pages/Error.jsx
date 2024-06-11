import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  let message, message2;
  switch (error.status) {
    case 404:
      message = "Ooops! Page not found";
      message2 =
        "It looks like the page you're looking for doesn't exist. Please check the URL and try again. Meanwhile, feel free to explore our wide range of beautiful furniture and decor items.";
      break;
    case 500:
      message = "An internal server error occurred.";
      message2 =
        "We're experiencing some technical issues on our end. Please try again later or contact our support team if the problem persists.";
      break;
    case 403:
      message = "Access Forbidden";
      message2 =
        "You don't have permission to access this page. If you believe this is a mistake, please contact our support team for assistance.";
      break;
    case 401:
      message = "Unauthorized Access";
      message2 =
        "You need to be logged in to view this page. Please log in or create an account to continue.";
      break;
    case 400:
      message = "Bad Request";
      message2 =
        "It seems there was an error with your request. Please check the information you entered and try again.";
      break;
    default:
      message = "Unexpected Error";
      message2 =
        "An unexpected error occurred. Please try again later or contact our support team for assistance.";
  }

  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{error.status} </h1>
          <h1 className="text-5xl font-bold">{message}</h1>
          <p className="py-6">{message2}</p>

          <Link to="/" className="btn btn-primary">
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Error;
