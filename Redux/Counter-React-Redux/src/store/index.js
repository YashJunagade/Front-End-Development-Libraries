import {createStore} from "redux";

const INITIAL_VALUE = {
     counter:0
}

const counterReducer = (store = INITIAL_VALUE, action) => {
     let newStore = store;
     if(action.type == "INCREMENT"){
          newStore = {counter : store.counter + 1};
     }else if(action.type == "DECREMENT"){
          newStore = {counter : store.counter - 1};
     }
     return newStore;
}

const counterStore = createStore(counterReducer);


export default counterStore;
