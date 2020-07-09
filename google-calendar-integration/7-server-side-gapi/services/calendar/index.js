const credentials = require("../../config/keys/google/calendar-service.json");

const { google } = require("googleapis");

async function getAllEvents(query){

  var auth = new google.auth.JWT(
      credentials.client_email,
      null,
      credentials.private_key,
      "https://www.googleapis.com/auth/calendar"
  );

  const api = google.calendar({version : "v3", auth : auth});
  const calendarId = 'allobon@gmail.com';

  //Returns metadata for a calendar.
  api.calendars.get({calendarId : calendarId}
      , function (err, resp) {
          if (err) {
              console.log(err);
          } else {
            console.log("calendar here")
              console.log(resp);
          }
      })


  // Make an authorized request to list Calendar events.
      api.events.list({
          calendarId: calendarId
      }, function (err, resp) {
        console.log("EVENTS");
        console.log(resp)
          if (err) {
              console.log(err)
          } else {
              console.log(resp.data.items);
          }
      });

  return "BLARGH"
}

module.exports = {
  getAllEvents
};
