import { useContext } from "react"
import { AppContext } from "../../state/app.context"
import classes from "./Description.module.css"
import { ReactComponent as LinkIcon } from "../../assets/casestudy-icon.svg"
import { ReactComponent as LinkIconRound } from "../../assets/link-icon-round.svg"
import data from "../../state/app.data"
import { Link } from "react-router-dom"

const Description = ({ hold }) => {
  const { inview } = useContext(AppContext)

  return (
    <section className={`${classes.about} ${hold && classes.reset}`}>
      <div className={classes.titleAndLink}>
        <div
          style={{ color: data[inview].mainColor }}
          className={classes.title}
        >
          {data[inview].title}
        </div>
        <a
          href={data[inview].website}
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
          <div className={classes.text}>visit website</div>
          <LinkIconRound className={classes.linkRound} />
        </a>
      </div>
      <div className={classes.description}>{data[inview].description}</div>
      <Link to={data[inview].caseStudy} className={classes.caseStudy}>
        <div
          style={{ borderColor: data[inview].mainColor }}
          className={classes.text}
        >
          Open case study
        </div>
        <LinkIcon
          style={{ stroke: data[inview].mainColor }}
          className={classes.linkIcon}
        />
      </Link>
    </section>
  )
}

export default Description
