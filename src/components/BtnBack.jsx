import { Link } from "react-router-dom";

const BtnBack = ({ url }) => {
  return (
    <Link to={url}>
        <i className="fas fa-long-arrow-left ml-44 mt-6 text-3xl icon-back-rpns" />
    </Link>
  )
}

export default BtnBack