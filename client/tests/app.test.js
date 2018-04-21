import {
  validateString,
  secondsToHHMMSS
} from "../src/app/components/Formatter";

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "../App";
// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });

test("validateString lowercase", () => {
  expect(validateString("hello")).toBe(true);
});
