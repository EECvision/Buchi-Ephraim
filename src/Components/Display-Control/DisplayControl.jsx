import { useContext } from "react";
import { setInview, setOustideDisplay } from "../../state/app.actions";
import { AppContext } from "../../state/app.context";
import classes from "./DisplayControl.module.css";
import data from "../../state/app.data";

const DisplayControl = () => {
  const { dispatch, inview, outsideDisplay } = useContext(AppContext);

  const handleOutsideDisplay = (value) => {
    dispatch(setOustideDisplay(value));
  };

  const handleView = (id) => {
    dispatch(setInview(id));
  };

  return (
    <div
      onMouseEnter={() => handleOutsideDisplay(true)}
      onMouseLeave={() => handleOutsideDisplay(false)}
      className={classes.wrapper}
    >
      {["", ...Object.values(data), ""].map((project, index) =>
        !project ? null : (
          <div
            key={index}
            onMouseOver={() => handleView(project.id)}
            onClick={() => handleOutsideDisplay (false)}
            style={{background: inview === project.id ? project.mainColor : "#D9D9D9"}}
            className={`${classes.tab} ${classes[`_${index + 1}`]} ${
              outsideDisplay && classes.grow
            }`}
          />
        )
      )}
    </div>
  );
};

export default DisplayControl;
