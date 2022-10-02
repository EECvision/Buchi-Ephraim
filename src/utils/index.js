import franklinImg from "../assets/franklin.png";
import commehubImg from "../assets/commehub.png";
import genadropImg from "../assets/genadrop.png";

export const mapImageToId = {
  0: genadropImg,
  1: franklinImg,
  2: commehubImg,
};

export const toSentenceCase = (str) => {
  let first = str[0].toUpperCase();
  return first + str.slice(1);
};

export const calcView = (projects, offset = -1) => {
  const values = Object.values(projects);
  let min = Number.MAX_SAFE_INTEGER;
  for (let val of values) {
    if (min > val && val > offset) {
      min = val;
    }
  }
  let id = Object.keys(projects).find((key) => projects[key] === min);
  return id;
};

export const mapIdToDisplay = {
  PROJECT_1: 0,
  PROJECT_2: 1,
  PROJECT_3: 2,
};

export const mapIdToDisplayOut = {
  PROJECT_1: 1,
  PROJECT_2: 2,
  PROJECT_3: 3,
};

export const mapProjectToId = {
  1: "PROJECT_1",
  2: "PROJECT_2",
  3: "PROJECT_3",
};
