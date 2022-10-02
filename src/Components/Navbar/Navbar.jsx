import classes from "./Navbar.module.css"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { useContext } from "react"
import { AppContext } from "../../state/app.context"
import { setAboutPage } from "../../state/app.actions"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Navbar = () => {
  const { dispatch } = useContext(AppContext)
  const location = useLocation()
  const navigate = useNavigate()

  const handleAboutPage = () => {
    dispatch(setAboutPage("show"))
    navigate("/about")
    window.localStorage.aboutPath = location.pathname
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to="/" className={classes.logoContainer}>
          <Logo className={classes.logo} />
          <div className={classes.name}>Buchi Ephraim</div>
        </Link>
        <div onClick={handleAboutPage} className={classes.link}>
          About
        </div>
      </div>
    </div>
  )
}

export default Navbar
