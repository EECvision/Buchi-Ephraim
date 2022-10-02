import { useEffect, useState } from "react"
import classes from "./SkewIn.module.css"

const SkewIn = ({ children, offset = 200, props }) => {
  const { top, clientHeight } = props
  const [hide, setHide] = useState(false)

  useEffect(() => {
    if (!hide) {
      if (props[top] <= 0 + offset) {
        setHide(true)
      }
    } else {
      if (props[top] - clientHeight > 0) {
        setHide(false)
      }
    }
  }, [props, top, hide, clientHeight, offset])

  return (
    <div className={classes.container}>
      <div
        className={`${classes.text} ${
          props[top] <= 0 + offset ? classes.slide : hide ? classes.hide : null
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default SkewIn
