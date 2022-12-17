import "./styles/Footer.css";
import { AiFillLinkedin, AiFillGithub, AiFillMail, AiFillFile } from "react-icons/ai";
import Resume from "../images/Resume-December-2022.pdf"

function Footer() {
  return (
    <div className="footer-component">
      <div className="footer-container">
        <div className="footer">
          <div className="github">
            <a
              className="logos"
              href="https://github.com/akauf13"
              target="_blank"
            >
              <AiFillGithub className="hub" />
            </a>
            {/* <a className="logos" href="https://github.com/akauf13" target="_blank">Github</a> */}
          </div>
          <div className="linked">
            <a
              className="logos"
              href="https://www.linkedin.com/in/adamkaufman13/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="mail">
            <a
              className="logos"
              href="mailto:adammkaufman10@gmail.com"
            >
              <AiFillMail />
            </a>
          </div>
          <div className="res">
            <a
              className="logos"
              href={Resume} target="_blank"
            >
              <AiFillFile />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
