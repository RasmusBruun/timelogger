import React from "react";
import ReactDOM from "react-dom";
import App from "../app/App";
import { shallow } from "enzyme";
import {
  default as Dashboard,
  handleChange,
  handleSubmit
} from "../app/views/Dashboard";
import PropTypes from "prop-types";
import { renderIntoDocument } from "react-dom/test-utils";

xit("handleSubmit", () => {
  var mockEvent = new CustomEvent("textEvent");
  // , {
  //   detail: {
  //     message: "test",
  //     time: new Date()
  //   },
  //   target: <input value="test" />,
  //   bubbles: true,
  //   cancelable: true
  // });
  mockEvent.data = { target: <input value="test" /> };
  const mockDashboard = shallow(<Dashboard />);
  const instanceDashboard = mockDashboard.instance().handleSubmit(mockEvent);
  instanceDashboard.setState({ textField: "test" });
  expect(instanceDashboard.state.textField).toBe("test");
});

it("render", () => {
  const mockDashboard = shallow(<Dashboard />);
  const jsxMock = <input type="submit" value="Add" />;
  expect(mockDashboard.contains(jsxMock)).toBe(true);
});
