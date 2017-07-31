import state from "./state.js";

export default {
	emailAddress: (state) => state.emailAddress,
	firebaseProfileId: (state) => state.firebaseProfileId,
	givenName: (state) => state.givenName,
	isAsyncInProgress: (state) => state.isAsyncInProgress,
	isLoggedInToGoogle: (state) => state.isLoggedInToGoogle,
	profileImgUrl: (state) => state.profileImgUrl,
	todos: (state) => state.todos
}
