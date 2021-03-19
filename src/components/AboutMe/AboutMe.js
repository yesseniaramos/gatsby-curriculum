import React from 'react'
import { Container, Button } from "react-bootstrap"
import cv from "../../images/cv.pdf"
import "./AboutMe.scss"

export default function AboutMe() {
  return (
    <Container className="about-me">
      <p>Soy desarrolladora web desde hace 5 años, he trabajado en carritos de compras, micrositios, landin pages, Restfull APIS en lenguajes como PHP, Node.js, javascript, c#. Recientemente he trabajado con React.js con gastby. </p>
      <hr />
      <a href={cv} targer="_blank" rel="noreferrer nooperner">
        <Button primary>Descargar CV</Button>
      </a>
    </Container>
  )
}
