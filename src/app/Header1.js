import React from "react";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid" >
                <a className="navbar-brand"
                    href="#" >
                    <img src="static/images/logo.png"
                        alt=""
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top" />
                    Lookup
                </a>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavToggle"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon">
                    </span>
                </button>

                <div className="collapse navbar-collapse justify-content-end"
                    id="navbarNavToggle">
                    <ul className="navbar-nav">
                        <li className="nav-item" >
                            <a className="nav-link"
                                href=""
                                data-bs-toggle="modal"
                                data-bs-target="#signin" >
                                Login / Sign Up
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="modal fade"
                    id="signin"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"
                                    id="staticBackdropLabel"> Login
                                </h5>
                                <button type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close">
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="form-floating">
                                    <div className="form-floating mb-3">
                                        <input type="email" class="form-control" id="emailAddress" placeholder="name@example.com" />
                                        <label for="emailAddress">Email Address</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input type="password" class="form-control" id="password" placeholder="Password" />
                                        <label for="password">Password</label>
                                    </div>
                                    <div className="row ms-0 me-0 mb-4">
                                        <button type="button" class="btn btn-primary">Sign in</button>
                                    </div>
                                    <div className="row ms-0 me-0 text-center mb-2">
                                        <p className="h6 mb-0">Already have an account?</p>
                                        <a className="link-secondary" href="" data-bs-target="#signup" data-bs-toggle="modal">Sign up</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade"
                    id="signup"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title"
                                    id="staticBackdropLabel"> Sign up
                                </h5>
                                <button type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close">
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="form-floating">

                                    <div className="row g-2">
                                        <div className="col-md mb-3">
                                            <div className="form-floating">
                                                <input type="text" class="form-control" id="firstName" placeholder="John" />
                                                <label for="firstName">First Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md mb-3">
                                            <div className="form-floating">
                                                <input type="text" class="form-control" id="lastName" placeholder="Doe" />
                                                <label for="lastName">Last Name</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="email" class="form-control" id="emailAddress" placeholder="name@example.com" />
                                        <label for="emailAddress">Email Address</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input type="password" class="form-control" id="password" placeholder="Password" />
                                        <label for="password">Password</label>
                                    </div>
                                    <div className="form-floating mb-4">
                                        <input type="password" class="form-control" id="confirmPassword" placeholder="Password" />
                                        <label for="confirmPassword">Confirm Password</label>
                                    </div>
                                    <div className="row ms-0 me-0 mb-4">
                                        <button type="button" class="btn btn-primary">Sign up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;