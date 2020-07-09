<template lang="html">
  <section class="float">
    <section class="main-content-port">

      <span v-if="isLoggedInToGoogle">

        <section class="calendar-listing">
          <h2>Calendar Listing</h2>

          <div v-if="!calendarEvents.length">
            <span>No events!</span>
          </div>
          <div v-if="calendarEvents.length">
            <ul>
              <li v-for="event in calendarEvents">
                <span>{{ event.summary }}</span>
                <time>{{ event.start.dateTime | dateFilter }}</time>
              </li>
            </ul>
          </div>


        </section>

      </span>

    </section>
  </section>
</template>

<script>

import { mapGetters }               from "vuex";
import moment                       from "moment";

export default {
  data(){
    return {
      calendarEvents: []
    }
  },
	computed: {
    ...mapGetters([
      "isLoggedInToGoogle",
    ])
	},
  filters: {
    dateFilter(timestamp) {
      return moment(timestamp).format("MMM DD YYYY");
    }
  },
  methods: {
    listUpcomingEvents(){
      gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      }).then((response) => {
        this.calendarEvents = response.result.items;
        console.log(this.calendarEvents);
      });
    }
  },
  created() {
    this.listUpcomingEvents();
  }
}
</script>

<style lang="css">
  .calendar-listing ul {
    margin-left: 24px;
    list-style-type: none;
  }
  .calendar-listing time {
    font-size: 12px
  }

  .calendar-listing li {
    margin-bottom: 16px;
  }
</style>
