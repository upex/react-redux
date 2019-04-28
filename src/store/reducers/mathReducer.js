const mathReducer = (
  state = {
    result: 1,
    lastValues: []
  }, action) => {
    switch(action.type) {
      case 'ADD' :
        state = {
          ...state,
          result : state.result + action.payload,
          lastValues : [...state.lastValues, state.payload]
        }
        break;
      case 'SUBSTRACT' :
        state = {
          ...state,
          result : state.result - action.payload,
          lastValues : [...state.lastValues, state.payload]
        }
        break;
    }
    return state;
}

export default mathReducer