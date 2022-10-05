import { useRef } from "react"
import { useEffect, useState } from "react"
import classes from "./SlideIn.module.css"

const SlideIn = ({ data, props }) => {
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
      {data &&
        data.map((text, index) => (
          <div key={index} className={classes.wrapper}>
            <div
              className={`${classes.text} ${
                hide ? classes.slideDown : classes.slideUp
              }`}
            >
              {text}
            </div>
          </div>
        ))}
    </div>
  )
}

export default SlideIn
