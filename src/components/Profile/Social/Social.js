import React from 'react'
import "./Social.scss"
import IcILinkedIn from "../../../images/icons/linkedin.svg"
import IcIGithub from "../../../images/icons/github.svg"

const socialMedia = [
  {
    icon: <IcILinkedIn />,
    link: "https://www.linkedin.com/in/yessenia-ramos-mart%C3%ADnez-316642168/"
  },
  {
    icon: <IcIGithub />,
    link: "https://github.com/yesseniaramos"
  }
]

export default function Social() {
  return (
    <div className="social">
      
      {socialMedia.map((social, index) => (
        <a 
          key={index} 
          href={social.link} 
          target="_blank" 
          rel="noreferrer nooperner" >
          {social.icon}
        </a>
      ))}
    </div>
  )
}