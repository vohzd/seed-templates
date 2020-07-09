<template lang="html">
  <section class="float">
    <section class="main-content-port">


        <div class="one col">
          <section class="add-todo-form">
            <input type="text" name="add-new-todo-form" placeholder="Add new todo" v-model.trim="pendingTodoTitle" v-on:keyup.enter.prevent="addTodo" />
            <datepicker v-model="datepickerDate" class="datepicker-style"></datepicker>
            <div class="check-float">
              <input type="checkbox" name="add-to-gcal" v-model="addToCalendar">
              <label for="add-to-gcal">Add to Calendar?</label>
            </div>
            <button type="button" name="button" v-on:click="addTodo">Add</button>
          </section>
        </div>


        <div class="three col">
          <section class="todo-listing">
            <h2>Todo Listing</h2>
            <div v-if="!todos.length">
              <span>Nothing to do!</span>
            </div>
            <div v-if="todos" class="top-pad">
              <h3>Existing</h3>
              <ul>
                <li v-for="todo in todos">
                  <span>{{ todo.title }}</span>
                  <time>{{ todo.date | dateFilter }}</time>
                  <span class="due-date" v-if="todo.due">Due: {{ todo.due }}</span>
                </li>
              </ul>
            </div>
          </section>
        </div>




    </section>
  </section>
</template>

<script>

import { mapGetters }               from "vuex";
import moment                       from "moment";

import datepicker                   from "vue-date";

// fb instance
import instance                     from "../../credentials/firebaseConfig.js";
const database                      = instance.database();

export default {
  data(){
    return {
      addToCalendar: false,
      datepickerDate: "Due date?",
      pendingTodoTitle: null,
    }
  },
  components: {
    datepicker
  },
	computed: {
    ...mapGetters([
      "isLoggedInToGoogle",
      "firebaseProfileId",
      "todos"
    ])
	},
  filters: {
    dateFilter(timestamp) {
      return moment(timestamp).format("MMM DD YYYY");
    }
  },
  methods: {
    addTodo(){
      if (this.pendingTodoTitle){
        let due;
        if (!isNaN(this.datepickerDate.substr(0, 1))) due = this.datepickerDate;
        else due = null;
        // pushes it to firebase
        database.ref("userWidgets/" + this.firebaseProfileId + "/todos").push({
          due,
          date: Date.now(),
          title: this.pendingTodoTitle,
        });

        if (this.addToCalendar){
          this.addToGCal()
        }

        this.pendingTodoTitle = "";
        this.pendingTodoTitle = "Due date?";
        this.addToCalendar = false;


      }
    },
    addToGCal(){
      let meta = {
          'summary': this.pendingTodoTitle,
          'start': {
            'dateTime': `${this.datepickerDate}T09:00:00-07:00`,
            'timeZone': 'America/Los_Angeles'
          },
          'end': {
            'dateTime': `${this.datepickerDate}T17:00:00-07:00`,
            'timeZone': 'America/Los_Angeles'
          }
        };
      let req = gapi.client.calendar.events.insert({
        "calendarId": "primary",
        "resource": meta
      }).execute((ev) => {
        console.log(ev);
      });
    },
    bindFirebase(){
      if (!this.firebaseProfileId) return;
      // todo
      this.$store.dispatch("bindFirebase", {
        name: "todos",
        ref: database.ref(`userWidgets/${this.firebaseProfileId}/todos`)
      });
    }
  },
  created() {
    this.bindFirebase();
  }
}
</script>

<style lang="css">

  .one {
    width: 25%
  }
  .two {
    width: 50%;
  }
  .three {
    width: 75%;
  }

  .col {
    float: left;
  }

  .add-todo-form {

  }
  .add-todo-form input[type="checkbox"]{
    float: left;
    width: 10%
  }

  .check-float {
    margin-top: 16px;
    margin-bottom: 16px;
    float: left;
    width: 100%;
  }

  .check-float label {
    float: left;
    width: 80%
  }
  .add-todo-form {

  }
  .top-pad {
    margin-top: 16px;
  }

  .todo-listing {
    padding-left: 64px;
  }

  .todo-listing ul {
    margin-left: 24px;
    list-style-type: none;
  }
  .todo-listing time {
    font-size: 12px
  }

  .todo-listing li {
    margin-bottom: 16px;
  }

  .datepicker-style {
    float: left;
    width: 100%;
  }

  .float {
    float: left;
  }

  .due-date {
    display: block;
    font-size:11px;
    float: left;
  }

  .date-picker {
    width: calc(100% - 32px);
    float: left;
    background: rgba(85, 85, 96, 0.1);
    padding: 8px;
  }


  .datepicker-style .input-wrapper {
    border: 0 !important;
    border-radius: 0;
    vertical-align: top;
    display: block !important;
    justify-content: space-between!important;
    flex-flow: none !important;
    align-items: center !important;
    text-align: center !important;
    padding: 0;
    height: 0;
    box-sizing: border-box;
  }

  .datepicker-style .input-wrapper:hover {
    cursor: pointer;
  }

  .date-panel {
  left: 0px;
  }

  .date-panel,
  .arrow-left,
  .arrow-right,
  .month-box,
  .year-box,
  .date-list,
  .date-list li {
    background-color: rgba(26, 26, 26, 1) !important;
    border: 0 !important;
    color: rgba(255, 255, 255, 0.6);
  }

  .nextMonth {
    color: rgba(255, 255, 255, 0.3) !important;
  }


</style>
