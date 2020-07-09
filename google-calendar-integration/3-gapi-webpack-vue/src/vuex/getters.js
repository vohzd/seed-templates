import state from "./state.js";

export default {
	emailAddress: (state) => state.emailAddress,
	givenName: (state) => state.givenName,
	isAsyncInProgress: (state) => state.isAsyncInProgress,
	isLoggedInToGoogle: (state) => state.isLoggedInToGoogle,
	profileImgUrl: (state) => state.profileImgUrl,
}
