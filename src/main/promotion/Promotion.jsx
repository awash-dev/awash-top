import "./Promotion.css";
import React from "react";

const Promotion = () => {
  return (
    <div>
      <div className="Promotion">
        <div className="Promtion-text">
          <h1>FOLLOWS US ON</h1>
          <div className="promotion-social">
            <div class="container p-4 pb-0">
              {/* <!-- Section: Social media --> */}
              <section class="mb-4">
                {/* <!-- Facebook --> */}
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style={{ background: "#3b5998" }}
                  href="#"
                  role="button"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                {/*   
        <!-- Twitter --> */}
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style={{ background: "#55acee" }}
                  href="#"
                  role="button"
                >
                  <i class="fab fa-twitter"></i>
                </a>

                {/* <!-- Google --> */}
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style={{ background: "#dd4b39" }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-google"></i>
                </a>

                {/* <!-- Instagram --> */}
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style={{ background: "#ac2bac" }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                {/*   
        <!-- Linkedin --> */}
                {/* <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style={{ background: "#0082ca" }}
                  href="#"
                  role="button"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a> */}
                {/* <!-- Github --> */}
                <a
                  data-mdb-ripple-init
                  class="btn text-white btn-floating m-1"
                  style={{ background: "#55acee" }}
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-telegram"></i>
                </a>
              </section>
              {/* <!-- Section: Social media --> */}
            </div>
          </div>
        </div>

        <div className="Promtion-text">
          <h1 className="centure">Contact Us </h1>
          <div className="promotion-social">
            <a
              className="mail-to"
              href="mailto:mohammedhusse4242@gmail.com"
            >
              mohammedhusse4242@gmail.com
            </a>
            <a
              className="mail-to"
              href="mailto:mohammed.dev.et@gmail.com"
            >
              mohammed.dev.et@gmail.com
            </a>
          </div>
        </div>
        <div className="Promtion-text" id="contact">
          <button className="promotion-btn">feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
