import { useEffect, useRef, useState } from "react";
import { getWidth } from "./CarouselCenter-script";
import classes from "./CarouselCenter.module.css";

const CarouselCenter = ({
  children,
  slideActiveCount,
  setSlideActiveCount,
  setSlideNumberOfCounts,
  gap = 16,
}) => {
  const cardContainerRef = useRef(null);
  const wrapperRef = useRef(null);

  const [state, setState] = useState({
    wrapperWidth: 0,
    cardWidth: 48 * 16,
  });

  const { wrapperWidth, cardWidth } = state;

  const handleSetState = (payload) => {
    setState((state) => ({ ...state, ...payload }));
  };

  useEffect(() => {
    cardContainerRef.current.style.transform = `translateX(-${
      slideActiveCount * cardWidth +
      slideActiveCount * gap -
      (wrapperRef.current.clientWidth - cardWidth) / 2
    }px)`;
  }, [slideActiveCount, gap, cardWidth, wrapperWidth]);

  // get children card width
  useEffect(() => {
    window.addEventListener("resize", () => {
      handleSetState({ cardContainerRef: 0, wrapperRef: 0 })
      setTimeout(() => {
        getWidth({ handleSetState, cardContainerRef, wrapperRef });
      }, 1000);
    });
    getWidth({ handleSetState, cardContainerRef, wrapperRef });
  }, []);

  useEffect(() => {
    const width =
      wrapperRef.current && wrapperRef.current.getBoundingClientRect().width;
    const length = children.length;
    const slideNumberOfCounts = length - Math.floor(width / (cardWidth + gap));
    setSlideNumberOfCounts(slideNumberOfCounts);
    if (!slideNumberOfCounts) {
      setSlideActiveCount(0);
    }
  }, [
    wrapperWidth,
    children,
    gap,
    cardWidth,
    setSlideActiveCount,
    setSlideNumberOfCounts,
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

export default CarouselCenter;
