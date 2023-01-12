import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <h4>Reseñas de resturantes </h4>
        </div>
      </section>
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Restaurante App Mallorca
              </h6>
              <p>
                Encuentra el restaurante perfecto, con muchos a escoger y desde
                puestos de comida en la calle a estableciemientos de lujo.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Social Network</h6>
              <p>
                <a href="#!" className="text-reset">
                  <AiFillFacebook />
                  Facebook
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <AiFillInstagram />
                  Instagram
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <AiFillTwitterCircle />
                  Twitter
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2">
                  Carrer de Salvador Dalí, 3, 07011 Palma, Illes Balears
                </MDBIcon>
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3">
                  apprestaurante@mallorca.es
                </MDBIcon>
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3">
                  + 34 971 34 82 12
                </MDBIcon>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="/">
          restauranteappmallorca.es
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
