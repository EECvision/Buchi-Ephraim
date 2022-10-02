export const slide1 = [
  "I am a creative and self-motivated designer",
  " passionate about creating seamless",
  " user exeperience.",
  " As a UX generalist, I love being actively",
  "involved in various stages of",
  "product delivery.",
]

export const slide2 = [
  "At work I ask lots of question to help me",
  "understand the problem we are",
  "trying to solve.",
  "understanding the problem informs my",
  "research approach which in turn helps me",
  "create intuitive designs that adds",
  " value to users.",
]

export const slide3 = [
  "Whether your goal is to generate leads,",
  "start selling, improve your ecommerce,",
  "build a converting blockchain website",
  "or have your own space in the digital world,",
  "connecting with the users’ emotions is key.",
]

export const slide4 = [
  "That's why I create digital designs that",
  "helps create the connections between your",
  "business and customers by combining research,",
  "designs and creative ideas into a",
  "beautiful and usable products.",
]

export const handleScroll = (props) => {
  const { handleSetState, aboutContents, refs, scrollY } = props
  let container = refs.containerRef.current
  let slideTop = refs.slideRef.current.getBoundingClientRect().top
  let processTop = refs.processRef.current.getBoundingClientRect().top
  let scrollTop = container.scrollTop
  let scrollHeight = container.scrollHeight
  let clientHeight = container.clientHeight
  let scrolled = (scrollTop / scrollHeight) * 100
  let dir = scrollTop > scrollY ? true : false

  handleSetState({
    scrolled,
    aboutContents: {
      ...aboutContents,
      dir,
      slideTop,
      scrollTop,
      processTop,
      clientHeight,
    },
  })
}
