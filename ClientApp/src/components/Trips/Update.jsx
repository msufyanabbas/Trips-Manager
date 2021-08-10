import React, { Component } from "react";
import axios from "axios";

export class Update extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
    this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      description: "",
      dateStarted: "",
      dateCompleted: "",
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get("api/Trips/SingleTrip/" + id).then((res) => {
      const response = res.data;
      this.setState({
        name: response.name,
        description: response.description,
        dateStarted: new Date(response.dateStarted).toISOString().slice(0, 10),
        dateCompleted: new Date(response.dateCompleted)
          .toISOString()
          .slice(0, 10),
      });
    });
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  onChangeDateStarted(e) {
    this.setState({
      dateStarted: e.target.value,
    });
  }
  onChangeDateCompleted(e) {
    this.setState({
      dateCompleted: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { history } = this.props;
    let UpdatedObject = {
      name: this.state.name,
      description: this.state.description,
      dateStarted: this.state.dateStarted,
      dateCompleted: this.state.dateCompleted,
    };
    axios.put("api/Trips/Update/" + id, UpdatedObject).then((res) => {
      history.push("/trips");
    });
  }
  render() {
    return (
      <div className="trip-form">
        <h2>Update the trip</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Trip Name : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Trip Description : </label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="row">
            <div className="col col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
                <label>Date Started : </label>
                <input
                  type="date"
                  className="form-control"
                  value={this.state.dateStarted}
                  onChange={this.onChangeDateStarted}
                />
              </div>
            </div>
            <div className="col col-md-6 col-sm-6 col-xs-12">
              <div className="form-group">
                <label>Date of Completion : </label>
                <input
                  type="date"
                  className="form-control"
                  value={this.state.dateCompleted}
                  onChange={this.onChangeDateCompleted}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-default" onClick={this.onCancel}>
              Cancel
            </button>
            <input
              type="submit"
              className="btn btn-primary"
              value="Update Trip"
            />
          </div>
        </form>
      </div>
    );
  }
}
