import { useEffect, useRef, useState } from "react";
import { getWidth } from "./Carousel-script";
import classes from "./Carousel.module.css";

const Carousel = ({
  children,
  slideActiveCount,
  setSlideActiveCount,
  reset,
  gap = 16,
}) => {
  const cardContainerRef = useRef(null);
  const wrapperRef = useRef(null);

  const [state, setState] = useState({
    wrapperWidth: 0,
    cardWidth: 10 * 16,
    activeCardWidth: 58 * 16,
  });

  const { wrapperWidth, cardWidth, activeCardWidth } = state;

  const handleSetState = (payload) => {
    setState((state) => ({ ...state, ...payload }));
  };

  useEffect(() => {
    if (reset) {
      cardContainerRef.current.style.transform = `translateX(-${0}px)`;
    } else {
      cardContainerRef.current.style.transform = `translateX(-${
        slideActiveCount * cardWidth + slideActiveCount * gap
      }px)`;
    }
  }, [slideActiveCount, gap, cardWidth, reset]);

  // get children card width
  useEffect(() => {
    window.addEventListener("resize", () => {
      handleSetState({ cardContainerRef: 0, wrapperRef: 0 })
      setTimeout(() => {
        getWidth({ handleSetState, cardContainerRef, wrapperRef });
      }, 1650);
    });
    getWidth({ handleSetState, cardContainerRef, wrapperRef });
  }, []);

  useEffect(() => {
    const width =
      wrapperRef.current && wrapperRef.current.getBoundingClientRect().width;
    const length = children.length;
    const slideNumberOfCounts =
      length - Math.floor(width / (activeCardWidth + gap));
    if (!slideNumberOfCounts) {
      setSlideActiveCount(0);
    }
  }, [
    wrapperWidth,
    children,
    gap,
    cardWidth,
    activeCardWidth,
    setSlideActiveCount,
  ]);

  return (
    <div className={classes.container}>
      <div ref={wrapperRef} className={classes.wrapper}>
        <div
          style={{ gap }}
          ref={cardContainerRef}
          className={classes.cardContainer}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
