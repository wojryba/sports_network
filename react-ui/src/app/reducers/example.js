/* eslint linebreak-style: 0 */
const initialState = [
  {
    reduxWorks: false
  }
];

export default function example(state = initialState, action) {
  switch (action.type) {
    case "FORM":
      return [
        {
          reduxWorks: action.state.redux
        },
        ...state
      ];
    default:
      return state;
  }
}
