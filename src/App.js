import React, { Component } from "react";
import "./App.css";

import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from "./api";
import { offlineAlert } from "./Alert";

class App extends Component {
  state = {
    events: [],
    page: null,
    defaultCity: "",
    lat: null,
    lon: null,
    offlineText: "",
    infoText: "",
  };
  componentDidMount() {
    getEvents().then((response) => this.setState({ events: response }));
    window.addEventListener("online", this.offlineAlert());
  }
  offlineAlert = () => {
    if (navigator.onLine === false) {
      this.setState({
        offlineText:
          "You appear to be offline. Please reconnect for an updated list.",
      });
    } else {
      this.setState({
        offlineText: "",
      });
    }
  };

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then((response) =>
        this.setState({ events: response, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then((response) =>
        this.setState({ events: response, page })
      );
    } else {
      getEvents(
        this.state.lat,
        this.state.lon,
        this.state.page
      ).then((response) => this.setState({ events: response }));
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Explore Events Near You</h1>
        <offlineAlert text={this.state.offlineText} />
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents
          updateEvents={this.updateEvents}
          numberOfEvents={this.state.events.length}
          lat={this.state.lat}
          lon={this.state.lon}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
