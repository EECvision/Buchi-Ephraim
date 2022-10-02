import { useRef, useState } from "react"
import classes from "./EmailButton.module.css"

const EmailButton = ({ placeholder }) => {
  const clipboardRef = useRef(null)
  const [clipboard, setClipboard] = useState("copy")

  const handleCopy = () => {
    clipboardRef.current.select()
    clipboardRef.current.setSelectionRange(0, 99999) /* For mobile devices */
    navigator.clipboard.writeText(clipboardRef.current.value)
    setClipboard("copied")
  }

  const handleRest = () => {
    setTimeout(() => {
      setClipboard("copy")
    }, 300)
  }

  return (
    <div className={classes.container}>
      <div className={classes.email}>{placeholder || "Sopard20@gmail.com"}</div>
      <div
        onMouseOut={handleRest}
        onClick={handleCopy}
        className={classes.clipboard}
      >
        {clipboard}
      </div>
      <input
        style={{ display: "none" }}
        ref={clipboardRef}
        type="text"
        defaultValue={"Sopard20@gmail.com"}
      />
    </div>
  )
}

export default EmailButton
