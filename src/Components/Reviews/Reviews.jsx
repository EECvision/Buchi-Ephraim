import React, { useEffect } from "react"
import classes from "./Reviews.module.css"
import { REVIEWS } from "./Reviews.script"

const Reviews = ({ offset, props }) => {
  const { top, clientHeight } = props
  useEffect(() => {
    const cards = document.getElementsByClassName("review-card")
    const cardOffset = 600
    for (let i = 0; i < cards.length; i++) {
      let offsetT = -Math.abs(Math.abs(offset) + i * cardOffset)
      if (props[top] <= 0 + offsetT) {
        cards[i].children[0].style.transform = "translateX(0)"
      } else if (props[top] - offset - cardOffset > 0) {
        if (i % 2 === 0) {
          cards[i].children[0].style.transform = "translateX(-6em)"
        } else {
          cards[i].children[0].style.transform = "translateX(6em)"
        }
      }
    }
  }, [props, top, clientHeight, offset])

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        See what colleagues are saying about me
      </div>
      <div className={classes.wrapper}>
        {REVIEWS.map((r, idx) => (
          <div key={idx} className={`${classes.reviewContainer} review-card`}>
            <div className={classes.content}></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
