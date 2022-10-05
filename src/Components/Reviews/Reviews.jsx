import React, { useEffect } from "react"
import classes from "./Reviews.module.css"
import { REVIEWS } from "./Reviews.script"
import { ReactComponent as QuoteUp } from "../../assets/quote-up.svg"
import { ReactComponent as QuoteDown } from "../../assets/quote-down.svg"

const Reviews = ({ props }) => {
  useEffect(() => {
    const cards = document.getElementsByClassName("review-card")
    const offSet = 100
    for (let i = 0; i < cards.length; i++) {
      const cardTop = cards[i].getBoundingClientRect().top
      if (cardTop + offSet <= window.innerHeight) {
        cards[i].children[0].style.opacity = "1"
        if (i % 2 === 0) {
          cards[i].children[0].style.transform = "translateX(2em)"
        } else {
          cards[i].children[0].style.transform = "translateX(-2em)"
        }
      } else {
        cards[i].children[0].style.opacity = "0"
        if (i % 2 === 0) {
          cards[i].children[0].style.transform = "translateX(-6em)"
        } else {
          cards[i].children[0].style.transform = "translateX(6em)"
        }
      }
    }
  }, [props])

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        See what colleagues are saying about me
      </div>
      <div className={classes.wrapper}>
        {REVIEWS.map(({ review, reviewer }, idx) => (
          <div key={idx} className={`${classes.reviewContainer} review-card`}>
            <div className={classes.content}>
              <div className={classes.review}>
                <QuoteUp className={classes.quoteUp} />
                {review}
                <QuoteDown className={classes.quoteDown} />
              </div>
              <div className={classes.reviewer}>{reviewer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
