import {Reducer, Action} from './redux-interface';
//import {Store} from './redux-store';

let reducer: Reducer<number> = (state: number, action: Action) => {
    if (action.type === 'INCREMENT')
        return state+1; 
    if (action.type === 'DECREMENT')
        return state - 1;
    if (action.type === 'PLUS')
        return state + action.payload;
    return state;
};

let incrementAction: Action = { type: 'INCREMENT' };
let decrementAction: Action = { type: 'DECREMENT' };
let plusSevenAction: Action = { type: 'PLUS', payload: 7 };

let store = new Store(reducer, 4);

let unsubscribe = store.subscribe(() => {
    var state = store.getState();
    var div = document.getElementById("result");
    div.innerHTML = state;
    //console.log('subscribed: ', store.getState());
});

let plus = (number) => {return {type:'PLUS', payload: number}};

function triggerPlusAction(){
   var number = (<HTMLInputElement>document.getElementById("number")).valueAsNumber;
   store.dispatch(plus(number));
}

//document.getElementById("inc").onclick(()=>{store.dispatch(incrementAction)};

// store.dispatch(incrementAction);
// store.dispatch(incrementAction);
// store.dispatch(decrementAction);
// store.dispatch(plusSevenAction);


