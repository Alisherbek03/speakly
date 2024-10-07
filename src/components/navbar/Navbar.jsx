import Logo from "../../assets/logo.svg";
import Button from "../button/Button";
import { useState } from "react";
import "./navbar.css";
import Modal from "../modal/Modal";
import Login from "../login/Login";
import SignUp from "../signup/SignUp";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div style={{ paddingTop: "30px" }}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container justify-cotent-between">
          <a class="navbar-brand" href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="nav">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link" href="#about">
                Blog
              </a>
              <a class="nav-link" href="#record">
                Products
              </a>
              <a class="nav-link" href="#users">
                About Us
              </a>
              <span class="nav-link" href="#">
                <div className="btns">
                  <Button onClick={openModal} outline={true} text="Sign up" />
                  <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <SignUp />
                  </Modal>

                  <Button
                    onClick={openLoginModal}
                    outline={false}
                    text="Login"
                  />
                  <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
                    <Login />
                  </Modal>
                </div>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
