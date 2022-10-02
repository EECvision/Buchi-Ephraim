import { useEffect, useRef, useState } from "react"
import classes from "./MyProcess.module.css"
import { process } from "./MyProcess.script"

const MyProcess = ({ props }) => {
  const { processTop, scrollTop } = props
  const containerRef = useRef(null)
  const [state, setState] = useState({
    scrollInit: 0,
    scrolled: 0,
    containerHeight: 0,
  })
  const { scrollInit, containerHeight, scrolled } = state

  const handleSetState = (payload) => {
    setState((state) => ({ ...state, ...payload }))
  }

  useEffect(() => {
    if (processTop <= 0) {
      if (scrollInit) {
        handleSetState({
          scrolled: (scrollTop - scrollInit) / containerHeight,
        })
      } else {
        handleSetState({
          scrollInit: scrollTop,
          containerHeight: containerRef.current.offsetHeight,
        })
      }
    }
  }, [processTop, scrollTop, containerHeight, scrollInit])

  useEffect(() => {
    if (scrolled > 0 && scrolled < 1) {
      let cards = containerRef.current.children
      let len = cards.length
      for (let i = 0; i < len; i++) {
        let card = cards[i]
        card.style.transform = `scale(${1 - 0.1 * (len - i) * scrolled})`
      }
    }
  }, [scrolled])

  return (
    <div className={classes.myProcessWrapper}>
      <div className={classes.title}>My process</div>
      <div ref={containerRef} className={classes.processContainer}>
        {process.map(({ id, icon, title, description }, index) => (
          <div
            key={index}
            style={{ top: `${index * 4}em` }}
            className={classes.process}
          >
            <div className={classes.icon}>{icon}</div>
            <div className={classes.RHS}>
              <div className={classes.idAndTitle}>
                <div className={classes.id}>{id}</div>
                <div className={classes.title_}>{title}</div>
              </div>
              <div className={classes.description}>{description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyProcess
