import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children,
}) => (
  <div>
    <Menu />
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-8" style={{ marginTop: -50 }}>
          {title}
        </h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>

    <footer className="footer bg-dark mt-auto">
      <div className="container-fluid bg-success text-white text-center py-1">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning btn-sm">Contact Us</button>
      </div>
    </footer>
  </div>
);

export default Base;
