# springboard
...and we're off!

My personal dashboard á la iGoogle, built from scratch with the most 'professional' tools I could wrap my head around.

## Lifecycle
- Open page, the `created` lifecycle event on App.vue fires the `this.getLogInState()` method.
- This method has the `firebase.auth().onAuthStateChanged()` listener which returns the currently logged in state.
- if user is logged out, retreive the guest profile.
- if the user is logged in, use their googleId (aka `UId`) to retreive their profile. (TODO: set up firebases rules to only allow read/write access for your own id).
- once either the guest or the logged in profile is returned, feed it into Vuex where the state can be passed down to the view layers. 
- there is a `firebase` key which also maps the internal Vuex store/state to an external firebase `ref`. This creates the 3 way binding between Vuex, the Firebase database, and of course the view layer so the end user can at least see what the hell is going on

Technical Stack
- Es6.
- Webpack.
- Vue.js with Vuex, VuexRouter, and VuexFire.
- Firebase Auth & DB.

## User requirements

### Global
- [x] As a user I want to have guest browsing.
- [x] As a user I want to log in with my Google Account.
- [x] As a user I want to log out.
- [x] I want to see a summary of how many todos are outstanding.
- [x] I want to see a summary of how much money I have left.
- [x] I want to minimise the side toolbar.


### Todo
- [x] As a user I want to view my Todos.
- [x] I want to archive existing todos.
- [x] I want to add new todos.
- [x] I want to be able to edit existing todos.
- [ ] I want to categorise todos into lists with colour coding.
- [x] Todo's can also have a due date.
- [ ] I want due dates tobe automatically added to calendar.
- [ ] I want to delete all todos.

### Feed
- [ ] I want to view my existing feeds.
- [ ] I want to add a new todo source.
- [ ] I want to modify or delete existing sources.
- [ ] I want to control how many news items are seen.
- [ ] I want to see loading bars and error messages when a feed fails.
- [ ] I want to save favourite links / stories.

### Calendar
- [x] I want to see a calendar of the current month.
- [x] I want to see the last 2 months before that.
- [x] I want to see the next 2 months ahead of that.
- [x] I want to see small labels for events and spending on a particular day.
- [x] I want to add labels for spending and events to a particular day.
- [x] I want to be asked how much I earn each month.
- [x] I want to see how much i’ve spent be compared against my spending.
- [ ] I want to categorise spends into food, drink, bill, going out, clothing, life event.
- [x] I want to click on a cell to see more information.
