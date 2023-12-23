import React from "react";
export default function Footer() {
  return (
    <div style={{ height: "100px" }} className="bg-black">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <link
            to="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          ></link>
          <span className="mb-3 mb-md-0 text-body-secondary  align-items-center">
            © 2023 Young Wolves, Inc
          </span>
        </div>
      </footer>
    </div>
  );
}
