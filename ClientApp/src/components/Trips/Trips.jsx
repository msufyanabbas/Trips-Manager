import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getAllTrips } from "../actions/tripActions";

export class Trips extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {
      loading: false,
      hasError: false,
      error: null,
      trips: [],
    };
  }
  componentDidMount() {
    console.log("component mount");
    axios.get("api/Trips/GetTrips").then((res) => {
      console.log(res.status);
      this.setState({
        trips: res.data,
      });
    });
  }
  // componentDidUpdate(prevProps) {
  //   if (prevProps.trips.data !== this.props.trips.data) {
  //     this.setState({ trips: this.props.trips.data });
  //   }
  // }
  onUpdate(id) {
    const { history } = this.props;
    history.push("/update/" + id);
  }
  onDelete(id) {
    const { history } = this.props;
    history.push("/delete/" + id);
  }
  renderAllTripsTable(trips) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date Started</th>
            <th>Date Completed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => {
            return (
              <tr>
                <td>{trip.name}</td>
                <td>{trip.description}</td>
                <td>{new Date(trip.dateStarted).toISOString().slice(0, 10)}</td>
                <td>
                  {new Date(trip.dateCompleted).toISOString().slice(0, 10)}
                </td>
                <td>
                  <div className="form-group">
                    <button
                      className="btn btn-success"
                      onClick={() => this.onUpdate(trip.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.onDelete(trip.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  render() {
    let content = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : this.state.hasError ? (
      <div>
        <p>{this.state.error}</p>
      </div>
    ) : (
      this.state.trips.length && this.renderAllTripsTable(this.state.trips)
    );
    // let content = this.props.trips.loading ? (
    //   <p>
    //     <em>Loading...</em>
    //   </p>
    // ) : (
    //   this.state.trips.length && this.renderAllTripsTable(this.state.trips)
    // );
    return (
      <div>
        <h2>Trips</h2>
        <p>Here you can see trips data</p>
        {content}
      </div>
    );
  }
}

// const mapStateToProps = ({ trips }) => ({
//   trips,
// });

// export default connect(mapStateToProps, { getAllTrips })(Trips);
