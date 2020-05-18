import React from "react";
import { shallow } from "enzyme";
import App from "../App";

import EventList from "../EventList";
import Event from "../Event";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    const event = {
      created: 1563825339000,
      duration: 9000000,
      id: "263370107",
      name: "Microservices mit dem MicroProfile 3.x",
      rsvp_limit: 80,
      date_in_series_pattern: false,
      status: "upcoming",
      time: 1566925200000,
      local_date: "2019-08-27",
      local_time: "19:00",
      updated: 1563825339000,
      utc_offset: 7200000,
      waitlist_count: 79,
      yes_rsvp_count: 80,
      venue: {
        id: 26266792,
        name: "adesso AG",
        lat: 53.54524230957031,
        lon: 9.950983047485352,
        repinned: false,
        address_1: "Große Elbstraße 36",
        city: "Hamburg",
        country: "de",
        localized_country_name: "Deutschland",
      },
      group: {
        created: 1387402147000,
        name: "Java User Group Hamburg",
        id: 11500362,
        join_mode: "open",
        lat: 53.54999923706055,
        lon: 10,
        urlname: "jug-hamburg",
        who: "Mitglieder",
        localized_location: "Hamburg, Deutschland",
        state: "",
        country: "de",
        region: "de_DE",
        timezone: "Europe/Berlin",
      },
      link: "https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",
      description:
        "<p>Wer Microservices in Java entwickeln möchte, muss nicht zwangsläufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verfügbar sind und bezüglich ihrer Funktionalität stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) für die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu zählen die Unterstützung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. Für den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gewählt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte für Enterprise Java und Systemintegration unterstützt er seine Kunden überwiegend durch Entwicklung, Reviews oder die Durchführung von Schulungen. Thilo ist (Co-)Autor mehrerer Bücher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelmäßig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",
      visibility: "public",
      member_pay_fee: false,
    };
    EventWrapper = shallow(<Event event={event} />);
  });

  test("test that componet is rendered", () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test("test that event wrapping div is rendered", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("test that event wrapping div just shows event__Overview", () => {
    expect(EventWrapper.find(".event").children()).toHaveLength(1);
  });

  test("test that event__Overview is rendered", () => {
    expect(EventWrapper.find(".event__Overview")).toHaveLength(1);
  });

  test("test that event__Overview children are rendered", () => {
    expect(EventWrapper.find(".event__Overview").children()).toHaveLength(3);
  });

  test("test that event__Details children are rendered", () => {
    EventWrapper.setState({
      showDetails: true,
    });
    expect(EventWrapper.find(".event__Details--description")).toHaveLength(1);
  });

  test("test that show/hide details button is rendered", () => {
    expect(EventWrapper.find(".event__Overview button")).toHaveLength(1);
  });

  test("click on button should show details", () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find(".event__Overview button").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });
});

// import React from "react";
// import { shallow } from "enzyme";
// import Event from "../Event";

// describe("<Event /> component", () => {
//   let EventWrapper;
//   beforeAll(() => {
//     EventWrapper = shallow(<Event />);
//   });

//   test("test that componet is rendered", () => {
//     expect(EventWrapper).toHaveLength(1);
//   });

//   test("test that event wrapping div is rendered", () => {
//     expect(EventWrapper.find(".event")).toHaveLength(1);
//   });

//   test("test that event wrapping div just shows event__Overview", () => {
//     expect(EventWrapper.find(".event").children()).toHaveLength(1);
//   });

//   test("test that event__Overview is rendered", () => {
//     expect(EventWrapper.find(".event__Overview")).toHaveLength(1);
//   });

//   test("test that event__Overview children are rendered", () => {
//     expect(EventWrapper.find(".event__Overview").children()).toHaveLength(3);
//   });

//   test("test that event__Details children are rendered", () => {
//     EventWrapper.setState({
//       showDetails: true,
//     });
//     expect(EventWrapper.find(".event__Details--description")).toHaveLength(1);
//   });

//   test("test that show/hide details button is rendered", () => {
//     expect(EventWrapper.find(".event__Overview button")).toHaveLength(1);
//   });

//   test("click on button should show details", () => {
//     EventWrapper.setState({
//       showDetails: false,
//     });
//     EventWrapper.find(".event__Overview button").simulate("click");
//     expect(EventWrapper.state("showDetails")).toBe(true);
//   });

//   test("set mock eventdata as state", () => {
//     EventWrapper.setState({
//       event: {
//         created: 1589414686000,
//         duration: 5400000,
//         id: "270635328",
//         name: "Watson Studio - Hands-on Tutorial",
//         date_in_series_pattern: false,
//         status: "upcoming",
//         time: 1593111600000,
//         local_date: "2020-06-25",
//         local_time: "15:00",
//         updated: 1589414722000,
//         utc_offset: -14400000,
//         waitlist_count: 0,
//         yes_rsvp_count: 33,
//         venue: {
//           id: 26906060,
//           name: "Online event",
//           repinned: false,
//           country: "",
//           localized_country_name: "",
//         },
//         is_online_event: true,
//         group: {
//           created: 1395070858000,
//           name: "Toronto - Cognitive, AI & Data Science Meetup",
//           id: 13393172,
//           join_mode: "open",
//           lat: 43.66999816894531,
//           lon: -79.37999725341797,
//           urlname: "Cognitive-Toronto",
//           who: "Members",
//           localized_location: "Toronto, ON",
//           state: "ON",
//           country: "ca",
//           region: "en_US",
//           timezone: "Canada/Eastern",
//         },
//         link: "https://www.meetup.com/Cognitive-Toronto/events/270635328/",
//         description:
//           "<p>Note: This is hosted by our Ottawa Meetup Group. It is a followup event to the previous event.</p> <p>We will be conducting a hands-on session where attendees can follow along and work with a variety of tools in Watson Studio. It will be a great opportunity for those interested in learning how to use Watson Studio or those who want to advance their knowledge of some of the tools available on Watson. We will provide the business use-case and dataset being demoed so attendees can follow along with the presenter and ask questions.</p> <p>Note that this is a follow-up to the meetup on May 14 where we introduced you to the tool and how to get free access to IBM Cloud and Watson Studio. If you missed that session yet are familiar with Watson Studio, then you will be able to leverage this session.</p> <p>Presenter:<br/>Jonathan Messiha is a data scientist at IBM Canada's Machine Learning Hub. He holds a Bachelor of IT from UOIT with a major in Networking and IT Security, and a Master of Management in Artificial Intelligence (MMAI) from Queen's University. Jonathan is an AI enthusiast who enjoys puzzles and solving challenging problems.</p> ",
//         how_to_find_us:
//           "https://ibm.webex.com/ibm/j.php?RGID=r5cf381514aa506a2318a0c7a346401b2",
//         visibility: "public",
//         member_pay_fee: false,
//       },
//     });
//     console.log(EventWrapper.state("event"));
//     expect(EventWrapper.state("event").name).toBe(
//       "Watson Studio - Hands-on Tutorial"
//     );
//   });
// });
