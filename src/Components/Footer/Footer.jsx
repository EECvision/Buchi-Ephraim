import EmailButton from "../Email-Button/EmailButton"
import classes from "./Footer.module.css"
import { ReactComponent as Heart } from "../../assets/icon-heart-white.svg"
import { ReactComponent as LinkIcon1 } from "../../assets/icon-link-1.svg"
import { ReactComponent as LinkIcon2 } from "../../assets/icon-link-2.svg"
import { ReactComponent as LinkIcon3 } from "../../assets/icon-link-3.svg"

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.fTop}>
        <div className={classes.fLeft}>
          <div className={classes.fLeftHeading}>Let's work together</div>
          <div className={classes.idea}>
            Got a project idea on your mind? Or perhaps you need a devoted
            product designer for your team? I’m one email away from building
            with you.
          </div>
          <EmailButton />
        </div>
        <div className={classes.fRight}>
          <div className={classes.fLeftHeading}>get in touch</div>
          <div className={classes.links}>
            <a
              href="https://www.linkedin.com/in/ephraim-sopuruchukwu/"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <LinkIcon1 />
            </a>
            <a
              href="https://www.behance.net/sopurucephraim"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <LinkIcon2 />
            </a>
            <a
              href="https://dribbble.com/Ephraim_Sopuruchukwu"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              <LinkIcon3 />
            </a>
          </div>
          <div className={classes.base}>
            Based in Nigeria, Available worldwide
          </div>
        </div>
      </div>
      <div className={classes.fBottom}>
        <div className={classes.code}>
          <Heart />
          <span>code by</span>
          <a
            href="https://github.com/EECvision"
            target="_blank"
            rel="noreferrer"
          >
            <span className={classes.devName}>Emmanuel Ezeka</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
