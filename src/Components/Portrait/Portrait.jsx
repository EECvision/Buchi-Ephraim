import classes from "./Portrait.module.css"
import photo from "../../assets/buchi.png"
import { ReactComponent as LinkIcon } from "../../assets/link-icon.svg"
import { ReactComponent as DownloadIcon } from "../../assets/icon-download.svg"
import { ReactComponent as LinkIcon1 } from "../../assets/icon-link-1.svg"
import { ReactComponent as LinkIcon2 } from "../../assets/icon-link-2.svg"
import { ReactComponent as LinkIcon3 } from "../../assets/icon-link-3.svg"
import resume from "../../assets/Buchi.pdf"

import { useEffect, useRef } from "react"

const Portrait = ({ props }) => {
  const LHSRef = useRef(null)
  const RHSRef = useRef(null)
  const { clientHeight, scrollTop } = props

  const transformPortrait = () => {
    const getScroll = () => {
      let scrolled = scrollTop / clientHeight
      if (scrolled < 1) return scrolled
      return 1
    }
    if (getScroll() >= 1) return
    RHSRef.current.style.transform = `translateY(-${getScroll() * 6}em)`
    LHSRef.current.style.transform = `scale(${1 + getScroll() * 0.1})`
  }

  useEffect(() => {
    transformPortrait()
  }, [props])

  return (
    <section className={classes.container}>
      <div ref={LHSRef} className={classes.LHS}>
        <img src={photo} alt="" />
        <div className={classes.links}>
          <a href={resume} download="Buchi-Resume" className={classes.resume}>
            <div>Download resume</div>
            <DownloadIcon className={classes.downloadIcon} />
          </a>
          <div className={classes.socialLink}>
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
        </div>
      </div>
      <div ref={RHSRef} className={classes.RHS}>
        <div className={classes.name}>
          <div className={classes.nameText}>Buchi</div>
          <div className={classes.nameText}>Ephraim</div>
          <div className={classes.role}>Product designer</div>
        </div>
        <div className={classes.description}>
          <div className={classes.linkIcon}>
            <LinkIcon />
          </div>
          A user-centric product designer who enjoys designing to simplify
          digital expereinces for all users. Available for full-time and
          freelance projects
        </div>
      </div>
    </section>
  )
}

export default Portrait
