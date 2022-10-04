import SlideIn from "../../Components/Text-Animations/Slide-In/SlideIn"
import classes from "./About.module.css"
import { handleScroll, slide1, slide2, slide3, slide4 } from "./About-script"
import workspace from "../../assets/workspace.png"
import Footer from "../../Components/Footer/Footer"
import { useRef, useState } from "react"
import MyProcess from "../../Components/My-Process/MyProcess"
import SkewIn from "../../Components/Text-Animations/Skew-in/SkewIn"
import Portrait from "../../Components/Portrait/Portrait"
import EmailButton from "../../Components/Email-Button/EmailButton"
import { ReactComponent as LeftArrow } from "../../assets/arrow-left.svg"
import FadeIn from "../../Components/Text-Animations/Fade-In/FadeIn"
import { useContext } from "react"
import { AppContext } from "../../state/app.context"
import { useLocation, useNavigate } from "react-router-dom"
import { setAboutPage } from "../../state/app.actions"
import CoreValues from "../../Components/Core-Values/CoreValues"
import Reviews from "../../Components/Reviews/Reviews"

const About = () => {
  const processContainerRef = useRef(null)
  const containerRef = useRef(null)
  const processRef = useRef(null)
  const slideRef = useRef(null)
  const fadeRef = useRef(null)
  const { dispatch, aboutPage } = useContext(AppContext)
  const location = useLocation()
  const navigate = useNavigate()

  const [state, setState] = useState({
    aboutContents: {},
    scrollY: 0,
  })
  const { aboutContents } = state
  const handleSetState = (payload) => {
    setState((state) => ({ ...state, ...payload }))
  }

  const refs = {
    processContainerRef,
    containerRef,
    processRef,
    slideRef,
    fadeRef,
  }

  const props = {
    refs,
    ...state,
    handleSetState,
  }

  const handleBack = () => {
    dispatch(setAboutPage("hide"))
    navigate(`${window.localStorage.aboutPath}`)
  }

  if (aboutPage === "default" && location.pathname !== "/about") return null

  return (
    <div
      onMouseOver={() =>
        handleSetState({ scrollY: containerRef.current.scrollTop })
      }
      onScroll={() => handleScroll(props)}
      ref={containerRef}
      className={`${classes.container} ${
        aboutPage === "show" || location.pathname === "/about"
          ? classes.slideIn
          : classes.slideOut
      }`}
    >
      <div className={classes.wrapper}>
        <section className={classes.nav}>
          <div onClick={handleBack} className={classes.backBtn}>
            <LeftArrow className={classes.leftIcon} />
            <div>Back</div>
          </div>
          <div className={classes.accentContainer}>
            <div className={classes.accent}>
              simplifying Digital experiences
            </div>
          </div>
          <EmailButton />
        </section>
        <Portrait props={aboutContents} />
        <section className={`${classes.title} ${classes.about}`}>
          Get to know me
        </section>
        <section className={classes.coreValues}>
          <CoreValues />
        </section>
        <section ref={slideRef} className={classes.content}>
          <div className={classes.contentWrapper}>
            <SkewIn offset={500} props={{ ...aboutContents, top: "slideTop" }}>
              About me
            </SkewIn>
            <div className={classes.textWrapper}>
              <SlideIn
                data={slide1}
                offset={500}
                props={{ ...aboutContents, top: "slideTop" }}
              />
              <SlideIn
                data={slide2}
                offset={100}
                props={{ ...aboutContents, top: "slideTop" }}
              />
            </div>
          </div>
          <div className={classes.contentWrapper_mobile}>
            <SkewIn offset={600} props={{ ...aboutContents, top: "slideTop" }}>
              About me
            </SkewIn>
            <div className={classes.textWrapper}>
              <FadeIn
                data={slide1}
                offset={400}
                props={{ ...aboutContents, top: "slideTop" }}
              />
              <FadeIn
                data={slide2}
                offset={200}
                props={{ ...aboutContents, top: "slideTop" }}
              />
            </div>
          </div>
        </section>
        <section ref={fadeRef} className={classes.content}>
          <div className={classes.contentWrapper}>
            <SkewIn offset={-200} props={{ ...aboutContents, top: "slideTop" }}>
              What I can <br />
              do for you{" "}
            </SkewIn>
            <div className={classes.textWrapper}>
              <SlideIn
                data={slide3}
                offset={-200}
                props={{ ...aboutContents, top: "slideTop" }}
              />
              <SlideIn
                data={slide4}
                offset={-600}
                props={{ ...aboutContents, top: "slideTop" }}
              />
            </div>
          </div>
          <div className={classes.contentWrapper_mobile}>
            <SkewIn offset={0} props={{ ...aboutContents, top: "slideTop" }}>
              What I can <br />
              do for you{" "}
            </SkewIn>
            <div className={classes.textWrapper}>
              <FadeIn
                data={slide3}
                offset={-200}
                props={{ ...aboutContents, top: "slideTop" }}
              />
              <FadeIn
                data={slide4}
                offset={-400}
                props={{ ...aboutContents, top: "slideTop" }}
              />
            </div>
          </div>
        </section>
        {/* <section className={classes.reviews}>
          <Reviews
            offset={-1200}
            props={{ ...aboutContents, top: "slideTop" }}
          />
        </section> */}
        <section ref={processRef} className={classes.myProcess}>
          <MyProcess props={aboutContents} />
        </section>
        <section className={classes.greeting}>
          <div className={classes.title}>THANKS FOR READING</div>
          <img src={workspace} alt="" />
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default About
