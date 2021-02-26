import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#a398ffbd" }}
      >
        <div className="container pt-4">
          <section className="mb-4">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/leoestremadoyro/"
              target="_blank"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram"></i>
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
          </section>
        </div>

        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "#6466f5" }}
        >
          © 2021 Copyright:
          <a
            className="text-dark mx-2"
            href="hhttps://www.facebook.com/leonardo.estremadoyro"
          >
            Leonardo Estremadoyro
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
