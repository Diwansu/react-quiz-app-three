
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="HomeContainer">
      <h1 id="heading">Quiz App</h1>
      <Link to={"/quiz"}>
        <button id="pl-btn">Play</button>
      </Link>
    </div>
  );
}

export default Home;
