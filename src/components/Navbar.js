import React from "react";

const Navbar = ({ onSave }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a class="navbar-brand" href="#">
      <img src="https://cdn3d.iconscout.com/3d/premium/thumb/to-do-list-8162464-6559232.png" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      Form Builder
    </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
        <form className="d-flex">
        <button type="button" onClick={onSave} class="btn btn-outline-success mx-3">Save</button>
        <button type="button"  class="btn btn-outline-primary mx-3">Preview</button>
        </form>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
