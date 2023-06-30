import React from "react";

function Singuppage() {
  return (
    <section class="loginSection">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-5">
            <div class="loginWrapper">
              <div class="heading">
                <h3 class="logTitle">Welcome👋</h3>
                <p class="logText">Create Your Account</p>
              </div>
              <form action="" class="input-group">
                <input type="text" class="form-control" placeholder="Name" />
                <input type="text" class="form-control" placeholder="SurName" />
                <input type="text" class="form-control" placeholder="Email" />
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
                <input
                  type="password"
                  class="form-control"
                  placeholder="Retype Password"
                />

                <div class="loginBtn">
                  <button class="cta signupBtn" type="submit">
                    sign up
                  </button>
                </div>
              </form>
              <div class="connectBtns">
                <a href="#link" class="abtn google">
                  <img
                    src="/img/google.webp"
                    class="img-fluid"
                    alt="googlelogo"
                  />
                  Continue With Google
                </a>
                <a href="#link" class="abtn apple">
                  <img src="/img/path4.png" class="img-fluid" alt="applelogo" />
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

export default Singuppage;
