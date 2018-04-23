import React from "react";
import { secondsToHHMMSS } from "../components/Formatter";
import projects from "../api/projects";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "placeholder name",
      timer: null,
      id: props.match.params.id,
      secondsCounter: 0,
      startOrPause: "Start",
      isTimerRunning: false
    };

    this.tick = this.tick.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  tick() {
    this.setState({
      secondsCounter: this.state.secondsCounter + 1
    });
  }

  /// <summary>Starts the timer if it's not running, stops it if it is running. On stopping the timer the new value is used to update the database.</summary>
  handleStart() {
    if (!this.state.isTimerRunning) {
      this.setState({ startOrPause: "Pause", isTimerRunning: true });
      let timer = setInterval(this.tick, 1000);
      this.setState({ timer });
    } else {
      clearInterval(this.state.timer);
      this.saveProject();
      this.setState({ startOrPause: "Resume", isTimerRunning: false });
    }
  }
  /// <summary>Deletes the Project currently being viewed, from the server database.</summary>
  handleDelete() {
    const del = window.confirm("Are you sure you want to delete?");
    if (del) {
      projects.deleteEntry(this.state.id);
      window.location.href = "/";
    }
  }
  /// <summary>Gets information on a single project from the server. The id to use is passed to this component from the parent. </summary>
  getProject() {
    projects
      .getEntry(this.state.id)
      .then(result =>
        this.setState({
          projectName: result.name,
          secondsCounter: result.timeSpent
        })
      )
      .catch(error => console.log(error));
  }

  /// <summary>Saves information on a single project to the server. The id to use is passed to this component from the parent. </summary>
  saveProject() {
    projects
      .updateEntry(
        this.state.id,
        this.state.projectName,
        this.state.secondsCounter
      )
      .then(result => result)
      .catch(error => console.log(error));
  }

  componentWillMount() {
    this.getProject();
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-auto mr-auto">{this.state.projectName}</div>
        </div>
        <div className="row">
          <div className="col-auto">
            <button
              className="btn btn-primary my-2 my-sm-0"
              type="submit"
              onClick={this.handleStart}
            >
              {this.state.startOrPause}
            </button>
            <button type="submit" className="btn" onClick={this.handleDelete}>
              Delete
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <div>{secondsToHHMMSS(this.state.secondsCounter)}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Project;
