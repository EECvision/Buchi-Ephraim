import { useState } from "react";
import classes from "./index.module.css";

const Test = () => {
  const [grow, setGrow] = useState(false);
  const text = "Genadrop";
  return (
    <div className={classes.container}>
      <div
        onMouseOver={() => setGrow(true)}
        onMouseOut={() => setGrow(false)}
        className={classes.wrapper}
      >
        {[1, 2, 3, 4].map((_, index) => (
          <div className={classes.textWrapper}>
            <div className={`${classes.text} ${grow && classes.grow}`}>
              {text
                .split("")
                .reverse()
                .map((txt, index) => (
                  <span key={index}>{txt}</span>
                ))}
            </div>
            <div
              className={`${classes.tab} ${classes[`_${index + 1}`]} ${
                grow && classes.grow
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;
