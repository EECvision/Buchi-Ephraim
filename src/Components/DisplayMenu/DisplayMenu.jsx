import classes from "./DisplayMenu.module.css"
import { useContext, useEffect, useState } from "react"
import Carousel from "../Carousel/Carousel"
import { AppContext } from "../../state/app.context"
import { setInview } from "../../state/app.actions"
import data from "../../state/app.data"
import { mapIdToDisplay } from "../../utils"
import { useNavigate } from "react-router-dom"
import { ReactComponent as CaretLeft } from "../../assets/CaretLeft.svg"

const DisplayMenu = ({ hold }) => {
  const [slideActiveCount, setSlideActiveCount] = useState()
  const { dispatch, inview } = useContext(AppContext)
  const navigate = useNavigate()

  const handleActiveView = (id, index) => {
    if (hold) return
    if (mapIdToDisplay[slideActiveCount] === index) {
      navigate(data[id].caseStudy)
    } else {
      dispatch(setInview(id))
    }
  }

  const handleBack = () => {
    if (mapIdToDisplay[slideActiveCount] !== 0) {
      let index = mapIdToDisplay[slideActiveCount]
      let id = Object.keys(mapIdToDisplay).find(
        (key) => mapIdToDisplay[key] === index - 1
      )
      dispatch(setInview(data[id].id))
    }
  }

  useEffect(() => {
    setSlideActiveCount(inview)
  }, [inview])

  return (
    <div className={classes.container}>
      <Carousel
        slideActiveCount={mapIdToDisplay[slideActiveCount]}
        setSlideActiveCount={setSlideActiveCount}
        reset={false}
      >
        {Object.values(data).map((project, index) => (
          <div
            key={index}
            onClick={() => handleActiveView(project.id, index)}
            className={`${classes.card} ${
              mapIdToDisplay[slideActiveCount] === index && classes.active
            }`}
          >
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </Carousel>
      <div
        onClick={handleBack}
        style={{ stroke: data[inview].mainColor }}
        className={`${classes.backBtn} ${
          mapIdToDisplay[slideActiveCount] && classes.active
        }`}
      >
        <CaretLeft className={classes.caretLeft} />
      </div>
    </div>
  )
}

export default DisplayMenu
