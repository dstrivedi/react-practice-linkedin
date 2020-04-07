import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

let bookList = [
  { title: "The Sun also rises", author: "Ernest Hemingway", pages: 260 },
  { title: "White Teeth", author: "Zadie Smith", pages: 460 },
  { title: "Cat's cradle", author: "Kurt Vonnegut", pages: 360 }
];

let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
};

const getPercent = decimal => {
  return decimal * 100 + "%";
};
const calGoalProgress = (total, goal) => {
  return getPercent(total / goal);
};

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>by: {author}</p>
      <p>Pages: {pages}</p>
    </section>
  );
};

class Library extends React.Component {
  state = { open: false }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     open: false
  //   }
  //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
  // }
  toggleOpenClosed= () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }
  render() {
    const { books } = this.props
    return (
      <div>
        <h1>The library is {this.state.open ? "open" : "closed" }</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
          />
        ))}
      </div>
    );
  }
}

const SkiDayCounter = ({ total, powder, backcountry, goal }) => {
  return (
    <section>
      <h1>Ski Days</h1>
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
        <p>Goal Progress: {calGoalProgress(total, goal)}</p>
      </div>
    </section>
  );
};

render(
  <div>
    <SkiDayCounter
      total={skiData.total}
      powder={skiData.powder}
      backcountry={skiData.powder}
      goal={skiData.goal}
    />
    <Library books={bookList} />
  </div>,
  document.getElementById("root")
);
