import React from "react";
import Table from "../components/Table";
import projects from "../api/projects";
import { validateString } from "../components/Formatter";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textField: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ textField: event.target.value });
  }

  /// <summary>On form submit, reads project name from text field and, if it validates, queries the server to add it. </summary>
  /// <param name="event" type="any">From submit event</param>
  handleSubmit(event) {
    const textInput = this.state.textField;
    if (validateString(textInput)) {
      projects
        .addEntry(textInput, "comment placeholder")
        .catch(error => console.log(error));
    } else {
      alert("Please enter only upper- or lowercase letters or digits");
      event.preventDefault();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-auto">
            <form onSubmit={this.handleSubmit}>
              <label>
                <input
                  type="text"
                  placeholder="Project name"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Add" />
            </form>
          </div>
        </div>

        <Table />
      </React.Fragment>
    );
  }
}

export default Dashboard;
