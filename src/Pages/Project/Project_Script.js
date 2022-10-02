import Genadrop from "../../Components/Projects/Genadrop"
import Commehub from "../../Components/Projects/Commehub"
import Franklin from "../../Components/Projects/Franklin"
import { calcView } from "../../utils"

export const getProject = (id) => {
  switch (id) {
    case "1":
      return <Genadrop />
    case "2":
      return <Franklin />
    case "3":
      return <Commehub />
    default:
      return null
  }
}

export const handleScroll = ({
  handleSetState,
  projectContents,
  domMountRef,
}) => {
  if (domMountRef.current < 10) return (domMountRef.current += 1) // debounce
  const projectContent = document.getElementById("projectContent").children
  let container = document.documentElement
  let scrollHeight = container.scrollTop
  let clientHeight = container.clientHeight
  let scrolled = (scrollHeight / clientHeight) * 100
  handleSetState({
    scrolled,
    projectContents: {
      ...projectContents,
      6: parseInt(projectContent[5].getBoundingClientRect().top),
      5: parseInt(projectContent[4].getBoundingClientRect().top),
      4: parseInt(projectContent[3].getBoundingClientRect().top),
      3: parseInt(projectContent[2].getBoundingClientRect().top),
      2: parseInt(projectContent[1].getBoundingClientRect().top),
      1: parseInt(projectContent[0].getBoundingClientRect().top),
    },
  })
}

export const getOffset = () => {
  let container = document.documentElement
  let scrollTop = container.scrollTop
  let scrollHeight = container.scrollHeight
  let clientHeight = container.clientHeight
  if (scrollHeight - scrollTop < clientHeight + 0.3 * clientHeight) return true
  return false
}

export const getScroll = ({ scrolled }) => {
  if (scrolled < 100) return scrolled
  return 100
}

export const transformBanner = ({ width, titleRef, cardRef, scrolled }) => {
  if (width > 1024) {
    titleRef.current.style.transform = `translateY(${-(
      (getScroll({ scrolled }) / 100) *
      100
    )}px)`
    cardRef.current.style.transform = `
      rotateY(${-(getScroll({ scrolled }) / 80) * 30}deg) 
      translateX(${(getScroll({ scrolled }) / 80) * 320}px) 
      translateY(${(getScroll({ scrolled }) / 100) * 0}px)
    `
  } else {
    titleRef.current.style.transform = `translateY(${-(
      (getScroll({ scrolled }) / 100) *
      100
    )}px)`
    cardRef.current.style.transform = `
      rotateY(${(getScroll({ scrolled }) / 100) * 0}deg) 
      translateX(${(getScroll({ scrolled }) / 100) * 0}px) 
      translateY(${(getScroll({ scrolled }) / 100) * 100}px) 
    `
  }
  document.getElementById("navContainer").style.opacity =
    (getScroll({ scrolled }) / 100) * 1
  document.getElementById("routeBtn").style.display = getOffset()
    ? "flex"
    : "none"
}

export const handleNext = ({ id, navigate }) => {
  if (Number(id) === 3) {
    navigate(`/project/${1}`)
  } else {
    navigate(`/project/${Number(id) + 1}`)
  }
}

export const handlePrev = ({ id, navigate }) => {
  if (Number(id) === 1) {
    navigate(`/project/${3}`)
  } else {
    navigate(`/project/${Number(id) - 1}`)
  }
}

export const handleScrollTop = ({ handleSetState }) => {
  let container = document.getElementById("bannerContainer")
  container.scrollIntoView()
  handleSetState({ contentId: 0 })
}

export const getActiveNav = ({ handleSetState, projectContents }) => {
  let id = calcView(projectContents, -200)
  handleSetState({ activeNav: Number(id) })
  if (projectContents["1"] > 560) {
    handleSetState({ activeNav: 0 })
    handleSetState({ contentId: 0 })
  }
}

export const getActiveContent = ({ contentId }) => {
  try {
    const projectContent = document.getElementById("projectContent").children
    projectContent[contentId - 1].scrollIntoView()
  } catch (error) {}
}
