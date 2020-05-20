import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleShowDetails = () => {
    if (this.state.showDetails === false) {
      this.setState({ showDetails: true });
    } else {
      this.setState({ showDetails: false });
    }
  };

  render() {
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
          <div className="event__Details">
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
