import { useRef } from "react"
import { useEffect, useState } from "react"
import classes from "./SkewIn.module.css"

const SkewIn = ({ children, props }) => {
  const containerRef = useRef(null)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const containerTop = containerRef.current.getBoundingClientRect().top
    const offset = 50
    if (containerTop + offset <= window.innerHeight) {
      setHide(false)
    } else {
      setHide(true)
    }
  }, [props])

  return (
    <div ref={containerRef} className={classes.container}>
      <div
        className={`${classes.text} ${
          hide ? classes.slideDown : classes.slideUp
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default SkewIn
