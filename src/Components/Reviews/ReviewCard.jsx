import classes from "./Reviews.module.css"
import { ReactComponent as QuoteUp } from "../../assets/quote-up.svg"
import { ReactComponent as QuoteDown } from "../../assets/quote-down.svg"
import { useRef } from "react"

const ReviewCard = ({ review, reviewer }) => {
  const cardRef = useRef(null)

  // let xDirection = ""
  // let yDirection = ""
  // let oldX = 0
  // let oldY = 0

  // const handleMouseMove = (e) => {
  //   let card = cardRef.current
  //   if (oldX < e.pageX) {
  //     xDirection = "right"
  //   } else {
  //     xDirection = "left"
  //   }
  //   if (oldY < e.pageY) {
  //     yDirection = "down"
  //   } else {
  //     yDirection = "up"
  //   }
  //   oldX = e.pageX
  //   oldY = e.pageY
  //   if (xDirection === "right" && yDirection === "up") {
  //     card.style.transform = `translate(16px, -16px)`
  //   } else if (xDirection === "right" && yDirection === "down") {
  //     card.style.transform = `translate(16px, 16px)`
  //   } else if (xDirection === "left" && yDirection === "up") {
  //     card.style.transform = `translate(-16px, -16px)`
  //   } else if (xDirection === "left" && yDirection === "down") {
  //     card.style.transform = `translate(-16px, 16px)`
  //   }
  // }

  return (
    <div className={`${classes.reviewContainer} review-card`}>
      <div
        ref={cardRef}
        // onMouseMove={handleMouseMove}
        className={classes.content}
      >
        <div className={classes.review}>
          <QuoteUp className={classes.quoteUp} />
          {review}
          <QuoteDown className={classes.quoteDown} />
        </div>
        <div className={classes.reviewer}>{reviewer}</div>
      </div>
    </div>
  )
}

export default ReviewCard
