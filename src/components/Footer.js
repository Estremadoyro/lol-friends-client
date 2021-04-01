import React, { Fragment } from "react";
import "../styles/Footer.css";
export const Footer = () => {
  return (
    <Fragment>
      <footer
        className="footer mt-auto text-center text-white"
        style={{ backgroundColor: "#928afc" }}
      >
        <div className="container">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com/leoestremadoyro/"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-instagram"></i>{" "}
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.linkedin.com/in/leonardo-estremadoyro/"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://github.com/Estremadoyro"
            target="_blank"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </footer>
    </Fragment>
  );
};
