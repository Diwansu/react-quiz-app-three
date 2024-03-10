
import { Link } from "react-router-dom";
import data from "./Question.json";

function Quiz(Props) {
  return (
    <div className="container">
      <div id="hhhh">
        <h1 id="ques">Questions</h1>
        <p id="noq">{Props.index + 1} of 15</p>
        <p id="ques-txt">{data[Props.index].question}</p>

        <div id="chooseOne">
          <div className="animals" onClick={(e) => Props.calc(e)}>
            {data[Props.index].optionA}
          </div>
          <div className="animals" onClick={(e) => Props.calc(e)}>
            {data[Props.index].optionB}
          </div>
          <div className="animals" onClick={(e) => Props.calc(e)}>
            {data[Props.index].optionC}
          </div>
          <div className="animals" onClick={(e) => Props.calc(e)}>
            {data[Props.index].optionD}
          </div>
        </div>

        <div className="options">
          <button onClick={Props.prev} className="click-btns" id="prev">
            Previous
          </button>
          <button onClick={Props.next} className="click-btns" id="next">
            Next
          </button>
          <button className="click-btns" id="quit" onClick={Props.quit}>
            Quit
          </button>
          <Link to={"/result"}>
            <button className="click-btns" id="finish">
              Finish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
