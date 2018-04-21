import React from "react";
import projects from "../api/projects";
import { secondsToHHMMSS } from "../components/Formatter";
import { Link } from "react-router-dom";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: []
    };
  }

  /// <summary>Creates table row elements from a given Project.</summary>
  /// <param name="project" type="project">Project to turn into a table row</param>
  /// <returns type="JSX:Element">Table row as JSX element </returns>
  createRow(project) {
    return (
      <tr key={project.id}>
        <td>{project.id}</td>
        <td>
          <Link
            to={{
              pathname: "/project/" + project.id
            }}
          >
            {project.name}
          </Link>
        </td>
        <td>{secondsToHHMMSS(project.timeSpent)}</td>
        <td>{project.comment}</td>
      </tr>
    );
  }

  /// <summary>Queries the server for all projects, creates table row elements from them and updates state.</summary>
  getTableData() {
    projects
      .getAllEntries()
      .then(result => {
        let _rows = [];
        result.forEach(entry => {
          _rows.push(this.createRow(entry));
        });
        this.setState({
          rows: _rows
        });
      })
      .catch(error => console.log(error));
  }
  componentWillMount() {
    this.getTableData();
  }

  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project Name</th>
            <th scope="col">Time Spent</th>
            <th scope="col">Comment</th>
          </tr>
        </thead>
        <tbody>{this.state.rows}</tbody>
      </table>
    );
  }
}

export default Table;
