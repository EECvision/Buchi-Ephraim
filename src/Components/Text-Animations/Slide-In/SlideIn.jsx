import { useEffect, useState } from "react"
import classes from "./SlideIn.module.css"

const SlideIn = ({ data, props, offset = 200 }) => {
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
      {data &&
        data.map((text, index) => (
          <div key={index} className={classes.wrapper}>
            <div
              className={`${classes.text} ${
                props[top] <= 0 + offset
                  ? classes.slide
                  : hide
                  ? classes.hide
                  : null
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
