import React from "react";
import ReactDOM from "react-dom";
import App from "../app/App";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const welcome = (
    <a className="navbar-brand" href="/">
      Timelogger
    </a>
  );
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
