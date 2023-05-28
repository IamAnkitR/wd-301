import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div>
      <p>Error 404- Page does not exist</p>
      <Link to="/">
        <button className="backToHomeButton" id="BackToHomeButton">
          GO Back
        </button>
      </Link>
    </div>
  );
}

export default Notfound;
