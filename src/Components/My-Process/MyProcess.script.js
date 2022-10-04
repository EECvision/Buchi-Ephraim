import { ReactComponent as StrategyIcon } from "../../assets/icon-strategy.svg"
import { ReactComponent as EmpathizeIcon } from "../../assets/icon-empathize.svg"
import { ReactComponent as IdeateIcon } from "../../assets/icon-ideate.svg"
import { ReactComponent as PrototypeIcon } from "../../assets/icon-prototype.svg"
import { ReactComponent as TestIcon } from "../../assets/icon-test.svg"
import { ReactComponent as DefineIcon } from "../../assets/icon-define.svg"

export const process = [
  {
    id: 1,
    icon: <StrategyIcon />,
    title: "Strategy",
    description:
      "Focusing on strategy, It’s always important for me to understand that we’re trying to accomplish the right challenges through asking the right questions before jumping into designing. Steps taken during this stage is usually stake holders interview, concept sketching, and value proposition mapping.",
  },
  {
    id: 2,
    icon: <EmpathizeIcon />,
    title: "Empathize",
    description:
      "In this phase I try to gain an empathetic understanding of the problem I’m trying to solve using research. Empathizing with users allows me to set aside my assumption and gain real insight into users and their needs",
  },
  {
    id: 3,
    icon: <DefineIcon />,
    title: "Define",
    description:
      "At this stage I condense and analyze all the information gathered on empathize phase and synthesize them to define the core problem. I then create Problem statement, user journey maps, and Personas to keep my efforts human-centered before proceeding to Ideation.",
  },
  {
    id: 4,
    icon: <IdeateIcon />,
    title: "Ideate",
    description:
      "During this phase, I brainstorm on multiple innovative approaches to solving the problem identified from the previous stage. This stage is particularly helpful for creating userflows and information architecture.",
  },
  {
    id: 5,
    icon: <PrototypeIcon />,
    title: "Prototype",
    description:
      "At the end of this phase you’ll have a pixel perfect design of your product. During the transition from low-fidelity wireframes into the final high-fidelity design I create clickable prototypes simulating final end results before development. At this stage, I also create a design system or a style guide.",
  },
  {
    id: 6,
    icon: <TestIcon />,
    title: "Test",
    description:
      "Time to implement! I ensure a proper hand-over of the finished designs to the developer, once it’s delivered, I can test the final product, analyze the results and iterate where possible.",
  },
]
