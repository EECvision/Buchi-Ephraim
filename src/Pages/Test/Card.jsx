import { useEffect, useRef, useState } from "react";
import classes from "./Card.module.css";

const Card = () => {
  const wrapperRef = useRef(null);
  const cardRef = useRef(null);
  const [state, setState] = useState({
    cardTop: {},
    scrolled: [],
  });

  const { cardTop, scrolled } = state;
  let topConstant = 6 * 16;

  const handleSetState = (payload) => {
    setState((state) => ({ ...state, ...payload }));
  };

  const handleScroll = () => {
    handleSetState({
      cardTop: {
        ...cardTop,
        4: parseInt(cardRef.current[4].getBoundingClientRect().top),
        3: parseInt(cardRef.current[3].getBoundingClientRect().top),
        2: parseInt(cardRef.current[2].getBoundingClientRect().top),
        1: parseInt(cardRef.current[1].getBoundingClientRect().top),
        0: parseInt(cardRef.current[0].getBoundingClientRect().top),
      },
    });
  };

  useEffect(() => {
    let res = Object.keys(cardTop).map((card, index) => {
      if (cardTop[card] <= topConstant + index * 4 * 16 || scrolled[index]) {
        return true;
      }
      return false;
    });

    handleSetState({ scrolled: res });
  }, [cardTop]);

  useEffect(() => {
    if (!scrolled.length) return;
    if (cardTop[0] - topConstant - 44 > 0) {
      scrolled.forEach((scroll, index) => {
        if (scroll) {
          cardRef.current[index].style.transform = `scale(1)`;
        }
      });
      handleSetState({ scrolled: [] });
    } else {
      scrolled.forEach((scroll, index) => {
        if (scroll) {
          cardRef.current[index].style.transform = `scale(${
            1 - 0.2 / (index + 1)
          })`;
        }
      });
    }
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    cardRef.current = wrapperRef.current.children;
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.ext}></div>
      <div ref={wrapperRef} className={classes.wrapper}>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            style={{ top: `${6 + index * 4}em` }}
            className={classes.content}
          >
            <div>{index}</div>
          </div>
        ))}
      </div>
      <div className={classes.ext}></div>
    </div>
  );
};

export default Card;
