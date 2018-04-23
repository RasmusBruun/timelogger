import React from "react";
import Dashboard from "../app/views/Dashboard";

const A = require.requireActual("../app/App");
const AppMock = jest.genMockFromModule("../app/App");

class DashboardMock extends AppMock.Dashboard {
  constructor(options) {
    super();
    this.options = { ...A.Control.prototype.options, ...options };
  }

  handleChange(event) {
    this.options.textField = event.target.value;
    return this;
  }
}

const dashboardMock = options => new ControlMock(options);
