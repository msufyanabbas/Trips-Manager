import React, { Component } from "react";
import axios from "axios";

export class Delete extends Component {
  constructor(props) {
    super(props);
    this.onCancelDelete = this.onCancelDelete.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      name: "",
      description: "",
      dateStarted: null,
      dateCompleted: null,
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get("api/Trips/SingleTrip/" + id).then((res) => {
      const response = res.data;
      this.setState({
        name: response.name,
        description: response.description,
        dateStarted: response.dateStarted,
        dateCompleted: response.dateCompleted,
      });
    });
  }
  onCancelDelete() {
    const { history } = this.props;
    history.push("/trips");
  }
  onDelete() {
    const { history } = this.props;
    const { id } = this.props.match.params;
    axios.delete("api/Trips/Delete/" + id).then((res) => {
      history.push("/trips");
    });
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h2>Delete Trip Confirmation</h2>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{this.state.name}</h2>
            <p className="card-text">{this.state.description}</p>
            <button className="btn btn-default" onClick={this.onCancelDelete}>
              Cancel
            </button>
            <button className="btn btn-danger" onClick={this.onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
