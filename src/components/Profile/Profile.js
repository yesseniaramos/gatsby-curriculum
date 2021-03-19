import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap"
import Social from "./Social";
import profileImage from "../../images/yessenia-ramos-martinez.png"
import "./Profile.scss"

const data = [
  {
    title: "Teléfono",
    info: "000000000"
  },
  {
    title: "Edad",
    info: 27
  }
];

export default function Profile() {
  return (
    <div className="profile">
      <div className="wallpaper" />
      <div className="dark" />
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileImage} thumbnail />
          </Col>
          <Col xs={12} md={8} className="info__data">
            <span>¡Hola!</span>
            <p>Yessenia Ramos Martinez</p>
            <p>Web Developer</p>
            <hr />
            <div className="more-info">
              {data.map((item, index) => (
                <div className="item" key={index}>
                  <p>{item.title} </p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social></Social>
      </Container>
    </div>
  )
}
