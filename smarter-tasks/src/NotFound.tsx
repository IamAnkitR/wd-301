import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div>
      <h2>Error 404- Page does not exist</h2>
      <Link to="/">
        <button className="backToHomeButton" id="backToHomeButton">
          GO Back
        </button>
      </Link>
    </div>
  );
}

export default Notfound;
