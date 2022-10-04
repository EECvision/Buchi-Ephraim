import classes from "./CoreValues.module.css"
import { ReactComponent as Heart } from "../../assets/icon-heart.svg"

const CoreValues = () => {
  const data = (
    <>
      <div>
        <div>Human</div>
        <Heart />,
      </div>
      <div>Friendly,</div>
      <div>Collaborative,</div>
      <div>Natural curiosity,</div>
      <div>Good communicator,</div>
      <div>Always learning,</div>
    </>
  )

  return (
    <div className={classes.carouselWrapper}>
      <div className={classes.carousel}>
        {data}
        {data}
        {data}
      </div>
    </div>
  )
}

export default CoreValues
