import {createStore} from "redux";
import reducer from "./ducks/counter";
// import promiseMiddleWare from "redux-promise-middleware"; //hijacks promises, like what axios.get gives you. call the property "payload". after axios.get, gives you three things, fulfilled, rejected, pending

// let createStoreWithMiddleWare = applyMiddleware(
//     promiseMiddleWare()
// )(createStore);

let store = createStore(reducer);

export default store;