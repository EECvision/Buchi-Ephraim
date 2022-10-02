import classes from "./WelcomeScreen.module.css"
import { ReactComponent as DesignFlow } from "../../assets/design-flow.svg"
import { ReactComponent as Logo } from "../../assets/logo-2.svg"
import { useEffect, useState } from "react"
import { useRef } from "react"

const greetings = [
  "Ciao",
  "Namaste",
  "Bonjour",
  "Hello",
  "Cześć",
  "Nǐ hǎo",
  "Hola",
  "Ahoj",
  "Olá",
  "Ndewo",
]

const WelcomeScreen = () => {
  const barRef = useRef(null)
  const [count, setCount] = useState(0)
  const [hideScreen, setHideScreen] = useState(window.sessionStorage.hideScreen)

  const getCount = () => {
    setCount((c) => c + 1)
  }

  useEffect(() => {
    setInterval(() => {
      getCount()
    }, 500)
  }, [])

  useEffect(() => {
    if (count >= greetings.length) {
      setCount(0)
    }
  }, [count])

  useEffect(() => {
    barRef.current.onanimationend = () => {
      setHideScreen(true)
      window.sessionStorage.hideScreen = "hide"
    }
  }, [])

  return (
    <div className={`${classes.container} ${hideScreen && classes.hide}`}>
      <div ref={barRef} className={classes.bar} />
      <div className={classes.wrapper}>
        <Logo className={classes.logo} />
        <div className={classes.body}>
          <div className={classes.greeting}>{greetings[count]}</div>
          <div className={classes.quote}>
            “Your product, your use case, and the space you occupy in people’s
            minds is unique, don’t fall into the trap of emulation”
          </div>
          <div className={classes.author}>~ Jesse Weaver ~</div>
        </div>
        <DesignFlow className={classes.flow} />
      </div>
    </div>
  )
}

export default WelcomeScreen
