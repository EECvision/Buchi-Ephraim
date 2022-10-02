import { useEffect, useState } from "react"
import classes from "./FadeIn.module.css"

const FadeIn = ({ data, offset = 200, props }) => {
  const { slideTop, clientHeight } = props
  const [hide, setHide] = useState(false)

  useEffect(() => {
    if (!hide) {
      if (slideTop <= 0 + offset) {
        setHide(true)
      }
    } else {
      if (slideTop - clientHeight > 0) {
        setHide(false)
      }
    }
  }, [slideTop, hide, clientHeight, offset])

  return (
    <div className={classes.container}>
      <div
        className={`${classes.text} ${
          slideTop <= 0 + offset ? classes.slide : hide ? classes.hide : null
        }`}
      >
        {data}
      </div>
    </div>
  )
}

export default FadeIn
