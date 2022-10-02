export const getWidth = ({ handleSetState, cardContainerRef, wrapperRef }) => {
  try {
    let element = cardContainerRef.current.children[0];
    let cardWidth = element.offsetWidth;
    handleSetState({
      cardWidth,
      wrapperWidth:
        wrapperRef.current && wrapperRef.current.getBoundingClientRect().width,
    });
  } catch (error) {}
};
