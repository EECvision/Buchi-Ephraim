import { useContext, useEffect, useState } from "react";
import CarouselCenter from "../Carousel-Center/CarouselCenter";
import classes from "./DisplayOut.module.css";
import data from "../../state/app.data";
import { mapIdToDisplayOut } from "../../utils";
import { AppContext } from "../../state/app.context";

const DisplayOut = () => {
  const [slideActiveCount, setSlideActiveCount] = useState();
  const { inview } = useContext(AppContext);

  useEffect(() => {
    setSlideActiveCount(inview);
  }, [inview]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <CarouselCenter
          slideActiveCount={mapIdToDisplayOut[slideActiveCount]}
          setSlideActiveCount={setSlideActiveCount}
          setSlideNumberOfCounts={() => {}}
        >
          {["", ...Object.values(data), ""].map((project, index) => (
            <div
              key={index}
              className={`${classes.card} ${
                inview === project.id && classes.active
              }`}
            >
              <img src={project.image} alt="" />
            </div>
          ))}
        </CarouselCenter>
      </div>
    </div>
  );
};

export default DisplayOut;
