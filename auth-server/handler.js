"use strict";

const axios = require("axios");

module.exports.getAccessToken = async (event) => {
  console.log("ca", event);
  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=um713mfuc6e3e1s5iv2jg4lptk" +
    "&client_secret=h01qvg2m3bto3f34pq25g2e447" +
    "&grant_type=authorization_code" +
    "&redirect_uri=https://mva66.github.io/meetup/" +
    "&code=" +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.refreshAccessToken = async (event) => {
  const MEETUP_OAUTH_URL =
    "https://secure.meetup.com/oauth2/access" +
    "?client_id=um713mfuc6e3e1s5iv2jg4lptk" +
    "&client_secret=h01qvg2m3bto3f34pq25g2e447" +
    "&grant_type=refresh_token" +
    "&refresh_token=" +
    event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
