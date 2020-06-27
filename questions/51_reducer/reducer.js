//Redux Practice
//You will be expanding on the reducer function

//types are defined here.
const types = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
};

const initialState = [{
  item: 'Use Redux',
  completed: false,
  id: 0,
}, ];

const reducer = (state = initialState, action) => {
  //ADD YOUR CODE HERE
  //console.log(state);
  //console.log(action, 'action');
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action, 'action');
      return [{
          text: action.text,
          completed: false,
          id: state.length
        },
        ...state,
      ]
    case 'DELETE_TODO':
      console.log(action, 'action');
      return [
        ...state,
        action.text
      ]
    default:
      return state
  }
};

module.exports = {
  types,
  initialState,
  reducer
};