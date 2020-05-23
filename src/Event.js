import React, { Component } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Line,
  Cell,
} from "recharts";

class Event extends Component {
  state = {
    showDetails: false,
    events: [],
  };

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  getData = () => {
    const taken = this.props.event.yes_rsvp_count;
    const limit = this.props.event.rsvp_limit;
    const open = limit - taken;

    return [
      { name: "Reservations", value: taken },
      { name: "Free slots", value: open },
    ];
  };
  render() {
    const { event } = this.props;
    let colors = ["#8884d8", "#82ca9d"];
    const showDetails = this.state.showDetails;

    return (
      <div className="event">
        <div className="event__Overview">
          <p className="event__Overview--name">{this.props.event.name}</p>
          <p className="event__Overview--localDate">
            {this.props.event.local_date}
          </p>
          <button
            className="details-btn"
            onClick={() => this.handleShowDetails()}
          >
            show details
          </button>
        </div>
        {showDetails && (
          <div className="eventDetails">
            {event.yes_rsvp_count && event.rsvp_limit ? (
              <ResponsiveContainer height={200}>
                <PieChart width={200} height={200}>
                  <Pie
                    data={this.getData()}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  >
                    {this.getData().map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index]} />
                    ))}
                  </Pie>

                  <Tooltip />

                  <Legend verticalAlign="top" height={36}>
                    <Line
                      name="Reservations"
                      type="monotone"
                      dataKey="taken"
                      stroke="#8884d8"
                    />
                    <Line
                      name="Free Slots"
                      type="monotone"
                      dataKey="open"
                      stroke="#82ca9d"
                    />
                  </Legend>
                </PieChart>
              </ResponsiveContainer>
            ) : null}
            <div className="eventVenue">
              Venue:{" "}
              {this.props.event.venue && this.props.event.venue.address_1}
            </div>
            <div className="eventStatus">Status: {this.props.event.status}</div>
            <div
              className="eventDescription"
              dangerouslySetInnerHTML={{ __html: this.props.event.description }}
            ></div>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
