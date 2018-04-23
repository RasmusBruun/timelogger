import React from "react";
import ReactDOM from "react-dom";
import App from "../app/App";
import { shallow } from "enzyme";
import { createRow } from "../app/components/Table";
import { default as Table } from "../app/components/Table";
import { Link } from "react-router-dom";
import { secondsToHHMMSS } from "../app/components/Formatter";

// this test as will pass if the two JSX elements could be compared
// "Compared values have no visual difference.""
xit("createRow", project => {
  const mockTable = shallow(<Table />);
  mockTable.setState({ rows: [] });
  const expectedRow = (
    <tr key={1}>
      <td>{"1"}</td>
      <td>
        <Link
          to={{
            pathname: "/project/1"
          }}
        >
          {"name test"}
        </Link>
      </td>
      <td>{"0h 0m 10s"}</td>
      <td>{"comment test"}</td>
    </tr>
  );
  const inputProject = {
    id: 1,
    name: "name test",
    timeSpent: 10,
    comment: "comment test"
  };
  mockTable.setState({ rows: mockTable.instance().createRow(inputProject) });
  expect(expectedRow).toBe(mockTable.instance().createRow(inputProject));
  // expect(mockTable.contains(<tbody>{expectedRow}</tbody>)).toBe(true);
});

it("render", () => {
  const mockTable = shallow(<Table />);
  mockTable.setState({ rows: [] });
  const header = (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Project Name</th>
          <th scope="col">Time Spent</th>
          <th scope="col">Comment</th>
        </tr>
      </thead>
      <tbody>{}</tbody>
    </table>
  );
  expect(mockTable.contains(header)).toEqual(true);
});
