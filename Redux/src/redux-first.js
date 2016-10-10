"use strict";
//import {Store} from './redux-store';
var reducer = function (state, action) {
    if (action.type === 'INCREMENT')
        return state + 1;
    if (action.type === 'DECREMENT')
        return state - 1;
    if (action.type === 'PLUS')
        return state + action.payload;
    return state;
};
var incrementAction = { type: 'INCREMENT' };
var decrementAction = { type: 'DECREMENT' };
var plusSevenAction = { type: 'PLUS', payload: 7 };
var store = new Store(reducer, 4);
var unsubscribe = store.subscribe(function () {
    var state = store.getState();
    var div = document.getElementById("result");
    div.innerHTML = state;
    //console.log('subscribed: ', store.getState());
});
var plus = function (number) { return { type: 'PLUS', payload: number }; };
function triggerPlusAction() {
    var number = document.getElementById("number").valueAsNumber;
    store.dispatch(plus(number));
}
//document.getElementById("inc").onclick(()=>{store.dispatch(incrementAction)};
// store.dispatch(incrementAction);
// store.dispatch(incrementAction);
// store.dispatch(decrementAction);
// store.dispatch(plusSevenAction);
