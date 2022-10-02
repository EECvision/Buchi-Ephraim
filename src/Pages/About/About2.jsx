import Home from "../Home/Home"
import Project from "../Project/Project"

const About2 = () => {
  const pathname = window.localStorage.aboutPath

  const mapPathToComponent = (path) => {
    if (path === "/") {
      return <Home animate={true} />
    } else if (path.includes("/project")) {
      return <Project animate={true} />
    } else {
      return null
    }
  }

  return <div>{mapPathToComponent(pathname)}</div>
}

export default About2
