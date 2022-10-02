import classes from "./Banner.module.css"
import { mapImageToId, toSentenceCase } from "../../../utils/index"
import { useContext } from "react"
import { AppContext } from "../../../state/app.context"
import { ReactComponent as Arrow } from "../../../assets/ArrowLeft.svg"

const Banner = ({ props }) => {
  const { aboutPage } = useContext(AppContext)
  const { center, bannerBg, params, handleSetState, cardRef, title, titleRef } =
    props

  return (
    <div id="bannerContainer" className={classes.container}>
      <div className={classes.fixed}>
        <div
          style={{ background: bannerBg }}
          className={`${aboutPage !== "show" ? classes.bg : classes.bg_} ${
            center && classes.center
          }`}
        />
        <img
          src={mapImageToId[Number(params.id) - 1]}
          alt=""
          ref={cardRef}
          className={`${classes.card} ${center && classes.center}`}
        />
        <div
          ref={titleRef}
          className={`${classes.title} ${center && classes.center}`}
        >
          {toSentenceCase(title)}
        </div>
      </div>
      <div
        onClick={() => handleSetState({ contentId: 1 })}
        className={classes.arrowDown}
      >
        <Arrow className={classes.arrow} />
      </div>
    </div>
  )
}

export default Banner
