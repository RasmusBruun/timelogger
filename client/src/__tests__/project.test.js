import React from "react";
import ReactDOM from "react-dom";
import App from "../app/App";
import { shallow } from "enzyme";
import {
  default as Project,
  getProject,
  saveProject,
  handleStart,
  handleDelete,
  tick
} from "../app/views/Project";
import { deleteEntry } from "../app/api/projects";
import { BrowserRouter as Router, Route, match } from "react-router-dom";

xit("handleStart", () => {
  const mockProject = shallow(
    <Project props={(Router.match = { params: { id: 1 } })} />
  );
  mockProject.setState({ id: 1 });
  var ins = mockProject.instance();
  ins.setState({ isTimerRunning: true });
  ins.handleStart();
  expect(ins.state.isTimerRunning).toBe(false);
});

xit("render", () => {
  const mockProject = shallow(<Project match={(params = { ...(id = 1) })} />);
  mockProject.setState({ projectName: "test name" });
  const title = <div className="col-auto mr-auto">{"test name"}</div>;
  expect(mockTable.contains(title)).toEqual(true);
});
