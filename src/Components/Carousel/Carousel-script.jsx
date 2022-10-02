export const getWidth = ({ handleSetState, cardContainerRef, wrapperRef }) => {
  try {
    let elements = cardContainerRef.current.children;
    let activeCardWidth = 0;
    let cardWidth = 0;
    for (let elem of elements) {
      if (elem.className.includes("active")) {
        activeCardWidth = elem.offsetWidth;
      }
      if (!elem.className.includes("active")) {
        cardWidth = elem.offsetWidth;
      }
    }

    handleSetState({
      activeCardWidth,
      cardWidth,
      wrapperWidth:
        wrapperRef.current && wrapperRef.current.getBoundingClientRect().width,
    });
  } catch (error) {}
};
