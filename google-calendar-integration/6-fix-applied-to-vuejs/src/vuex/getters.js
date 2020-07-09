import state from "./state.js";

export default {
	googleClientId: (state) => state.googleClientId,
	googleEndpoint: (state) => state.googleEndpoint,
	googleScope: (state) => state.googleScope,
}
