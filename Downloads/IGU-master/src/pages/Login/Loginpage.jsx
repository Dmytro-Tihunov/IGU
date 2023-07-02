import React from "react";
import "./Login.css";

function Loginpage() {
  return (
    <section class="loginSection">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-5">
            <div class="loginWrapper">
              <div class="heading">
                <h3 class="logTitle">Welcome back👋</h3>
                <p class="logText">Sign In to your Account</p>
              </div>
              <form action="" class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />

                <div class="loginBtn">
                  <button class="cta" type="submit">
                    Log in
                  </button>
                </div>
              </form>
              <div class="connectBtns">
                <a href="#link" class="abtn google">
                  <img
                    src="./img/google.webp"
                    class="img-fluid"
                    alt="googlelogo"
                  />
                  Continue With Google
                </a>
                <a href="#link" class="abtn apple">
                  <img
                    src="./img/path4.png"
                    class="img-fluid"
                    alt="applelogo"
                  />
                  Continue With Apple
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Loginpage;
