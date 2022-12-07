import { Link } from "react-router-dom";
import { ARROW_LEFT } from "../multimedia/SVG";

const BtnBack = ({ url }) => {
  return (
    <Link to={url}>
      {ARROW_LEFT}
    </Link>
  )
}

export default BtnBack