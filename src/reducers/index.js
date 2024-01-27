export default function orders(state = [], action) {
  switch (action.type) {
    case addOrder:
      return [...state, action.order];
    default:
      return state;
  }
}
