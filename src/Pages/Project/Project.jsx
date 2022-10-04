import React, { useEffect, useState, useRef } from "react"
import {
  getActiveContent,
  getActiveNav,
  getProject,
  handleScroll,
  handleScrollTop,
  transformBanner,
} from "./Project_Script"
import { useParams } from "react-router-dom"
import useWidth from "../../Components/Hooks/useWidth"
import classes from "./Project.module.css"
import Nav from "../../Components/Projects/Nav/Nav"
import Banner from "../../Components/Projects/Banner/Banner"
import { mapProjectToId } from "../../utils"
import data from "../../state/app.data"

const Project = ({ animate }) => {
  const { width } = useWidth()
  const cardRef = useRef(null)
  const titleRef = useRef(null)
  const overlayRef = useRef(null)
  const domMountRef = useRef(0)
  const params = useParams()
  const [state, setState] = useState({
    center: false,
    close: false,
    scrolled: 0,
    contentId: 0,
    activeNav: 0,
    projectContents: {},
  })
  const { center, projectContents, contentId, activeNav, scrolled } = state
  let aboutPathId = ""
  if (window.localStorage.aboutPath) {
    aboutPathId = window.localStorage.aboutPath.split("/")[2]
  }
  const { title, bannerBg } = data[mapProjectToId[params.id || aboutPathId]]
  const navs = ["Nav1", "Nav2", "Nav3", "Nav4", "Nav5", "Nav6"]

  const handleSetState = (obj) => {
    setState((state) => ({ ...state, ...obj }))
  }

  const props = {
    projectContents,
    cardRef,
    titleRef,
    domMountRef,
    navs,
    params,
    activeNav,
    center,
    bannerBg,
    title,
    handleSetState,
  }

  useEffect(() => {
    handleSetState({ center: true })
    handleScrollTop({ handleSetState })
  }, [params.id])

  useEffect(() => {
    transformBanner({ width, titleRef, cardRef, scrolled })
  }, [scrolled])

  useEffect(() => {
    getActiveNav({ handleSetState, projectContents })
  }, [projectContents])

  useEffect(() => {
    getActiveContent({ contentId })
  }, [contentId])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll(props)
    })
  }, [])

  useEffect(() => {
    if (animate) {
      overlayRef.current.style.background =
        data[mapProjectToId[aboutPathId]].bannerBg
    }
  }, [animate])

  return (
    <div
      onScroll={() => handleScroll(props)}
      className={`${classes.container}`}
    >
      <div className={classes.wrapper}>
        <div
          ref={overlayRef}
          className={`${classes.overlay} ${animate && classes.active}`}
        />
        <Banner props={props} />
        <div className={classes.projectWrapper}>
          {getProject(params.id || aboutPathId)}
          <Nav props={props} />
        </div>
      </div>
    </div>
  )
}

export default Project
