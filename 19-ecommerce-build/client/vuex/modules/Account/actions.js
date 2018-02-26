import state 												from "./state.js";
import database                     from "../../../../database/database.js";

export default {
  registerNewUser({commit}, payload){
    database.save(payload);
  }
}
