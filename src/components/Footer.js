import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <div className="social-icons">
              <a
                href="https://github.com/ioioio8888"
                target="_blank"
                rel="noopener noreferrer"
                style={{paddingRight: 15, color: "white"}}
              >
                <GitHubIcon/>
              </a>
              <a
                href="https://www.linkedin.com/in/louis-lui-7b7a2a146/"
                target="_blank"
                rel="noopener noreferrer"
                style={{paddingRight: 15, color: "white"}}
              >
                <LinkedInIcon/>
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
