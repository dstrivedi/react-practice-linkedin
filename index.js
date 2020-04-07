import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
};

class SkiDayCounter extends Component {
  getPercent = decimal => {
    return decimal * 100 + "%"
  }
  calGoalProgress = (total, goal) => {
    return this.getPercent(total/goal)
  }
  render() {
    const {total, powder, backcountry, goal} = this.props
    return (
      <section>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal Progress: {this.calGoalProgress(total,goal)}</p>
        </div>
      </section>
    );
  }
}

render(
  <SkiDayCounter
    total={skiData.total}
    powder={skiData.powder}
    backcountry={skiData.powder}
    goal={skiData.goal}
  />,
  document.getElementById("root")
);
