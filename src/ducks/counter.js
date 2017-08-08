// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = true;

let initialState = {
    currentValue: 5,
    futureValues: [],
    previousValues: []
}


//constants
//action builders

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UNDO = "UNDO";
const REDO = 'REDO';

export function undo() {
    return {
        type: UNDO,
    }
}

export function redo() {
    return {
        type: REDO,
    }
}

export function increment(amount) {
    return {
        type: INCREMENT,
        amount
    }
} 

export function decrement(amount) {
    return {
        type: DECREMENT,
        amount
    }
}



//make initial state
//make reducer function


export default function(state = initialState, action) { //if you export default, you don't need to name it. just give it a variable name when you import it in another component
    switch(action.type) {
        case INCREMENT :
            let newValue = state.currentValue + action.amount;
            return Object.assign({}, state, {currentValue: newValue , futureValues:[], previousValues: [state.currentValue, ...state.previousValues]});
        case DECREMENT :
            let newerValue = state.currentValue - action.amount
            return Object.assign({}, state, {currentValue: newerValue, futureValues:[], previousValues: [state.currentValue, ...state.previousValues]});
        case UNDO: 
            return Object.assign({}, state, {currentValue: state.previousValues[0], futureValues: [state.currentValue, ...state.futureValues], previousValues: state.previousValues.slice(1, state.previousValues.length)});
        case REDO: 
            return Object.assign({}, state, {currentValue: state.futureValues[0], previousValues: [state.currentValue, ...state.futureValues], futureValues: state.futureValues.slice(1, state.futureValues.length)});
    }
    return state; //default, return state instead of undefined
}

