import { useContext, useEffect, useRef, useState } from "react"
import DisplayOut from "../../Components/Display-Out/DisplayOut"
import DisplayMenu from "../../Components/DisplayMenu/DisplayMenu"
import WelcomeScreen from "../../Components/WelcomeScreen/WelcomeScreen"
import { AppContext } from "../../state/app.context"
import classes from "./Home.module.css"
import Description from "../../Components/Description/Description"
import data from "../../state/app.data"
import DisplayControl from "../../Components/Display-Control/DisplayControl"
import { mapIdToDisplayOut, mapProjectToId } from "../../utils"
import { setInview } from "../../state/app.actions"

const Home = ({ animate }) => {
  const timerId = useRef(null)
  const overlayRef = useRef(null)
  const containerRef = useRef(null)
  const [state, setState] = useState({
    startX: 0,
    startY: 0,
    endY: 0,
    endX: 0,
    move: false,
    end: false,
    hold: false,
  })
  const { hold, startX, startY, endY, endX, move, end } = state
  const { dispatch, outsideDisplay, inview } = useContext(AppContext)

  const handleSetState = (payload) => {
    setState((state) => ({ ...state, ...payload }))
  }

  const handleView = (id) => {
    dispatch(setInview(id))
  }

  // useEffect(() => {
  //   handleSetState({ hold: true })
  //   timerId.current = setTimeout(() => {
  //     handleSetState({ hold: false })
  //   }, 0)
  // }, [inview])

  useEffect(() => {
    if (animate) {
      overlayRef.current.style.background = data[inview].mainColor
    }
  }, [animate, inview])

  useEffect(() => {
    const windowWidth = window.innerWidth
    const numId = mapIdToDisplayOut[inview]
    const len = Object.keys(data).length
    if (!endY || !endX) return
    if (Math.abs(startY - endY) > 30 || Math.abs(startX - endX) < 30) return
    if (move && startX) {
      if (startX <= 150 && numId > 1) {
        dispatch(setInview(mapProjectToId[numId - 1]))
      } else if (startX >= windowWidth - 150 && numId < len) {
        dispatch(setInview(mapProjectToId[numId + 1]))
      }
      handleSetState({ startX: 0, move: false, end: false })
    }
  }, [end])

  useEffect(() => {
    // touch event for mobile
    containerRef.current.addEventListener("touchstart", (e) => {
      let event = e.changedTouches ? e.changedTouches[0] : e
      handleSetState({
        startX: event.clientX,
        startY: event.clientY,
        endY: 0,
        endX: 0,
      })
    })

    containerRef.current.addEventListener("touchmove", () => {
      handleSetState({ move: true, end: false })
    })

    containerRef.current.addEventListener("touchend", (e) => {
      handleSetState({ end: true })
      let event = e.changedTouches ? e.changedTouches[0] : e
      handleSetState({ endX: event.clientX, endY: event.clientY })
    })
  }, [])

  return (
    <div ref={containerRef} className={classes.container}>
      <div
        ref={overlayRef}
        className={`${classes.overlay} ${animate && classes.active}`}
      />
      <div
        className={`${classes.bar} ${animate && classes.active}`}
        style={{ background: data[inview].mainColor }}
      />
      <WelcomeScreen />
      {outsideDisplay && <DisplayOut />}
      <div className={`${classes.loading} ${hold && classes.active}`} />
      <div className={classes.innerContainer}>
        <div className={classes.mobileIndicator}>
          {Object.values(data).map((project, index) => (
            <div
              onClick={() => handleView(project.id)}
              key={index}
              style={{
                background:
                  inview === project.id ? project.mainColor : "#D9D9D9",
              }}
              className={`${classes.tab} ${classes[`_${index + 1}`]}`}
            />
          ))}
        </div>
        <DisplayMenu hold={hold} />
        <Description hold={hold} />
      </div>
      <div className={classes.displayControlWrapper}>
        <DisplayControl />
      </div>
    </div>
  )
}

export default Home
