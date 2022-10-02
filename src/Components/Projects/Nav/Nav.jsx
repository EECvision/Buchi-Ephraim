import {
  handleNext,
  handlePrev,
  handleScrollTop,
} from "../../../Pages/Project/Project_Script";
import { useNavigate } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = ({ props }) => {
  const { navs, handleSetState, params, activeNav } = props;
  const navigate = useNavigate();

  return (
    <div>
      <div id="navContainer" className={classes.container}>
        {navs.map((nav, index) => (
          <div
            key={index}
            onClick={() => handleSetState({ contentId: index + 1 })}
            className={` ${classes.navItem} ${
              activeNav === index + 1 && classes.active
            }`}
          >
            {nav}
          </div>
        ))}
        <div
          className={classes.backToTop}
          onClick={() => handleScrollTop({ handleSetState })}
        >
          Back to top
        </div>
        <div className={classes.routeBtn}>
          <div
            onClick={() => handlePrev({ id: params.id, navigate })}
            className={classes.prev}
          >
            Prev
          </div>
          <div
            onClick={() => handleNext({ id: params.id, navigate })}
            className={classes.next}
          >
            Next
          </div>
        </div>
      </div>

      <div id="routeBtn" className={`${classes.routeBtn} ${classes.out}`}>
        <div
          onClick={() => handlePrev({ id: params.id, navigate })}
          className={classes.prev}
        >
          Prev
        </div>
        <div
          onClick={() => handleNext({ id: params.id, navigate })}
          className={classes.next}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Nav;
