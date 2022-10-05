import { useRef } from "react"
import { useEffect, useState } from "react"
import classes from "./FadeIn.module.css"

const FadeIn = ({ data, props }) => {
  const containerRef = useRef(null)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const containerTop = containerRef.current.getBoundingClientRect().top
    const offset = 200
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
        {data}
      </div>
    </div>
  )
}

export default FadeIn
