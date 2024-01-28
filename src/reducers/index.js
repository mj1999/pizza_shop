import { addAction, removeAction, changeStageAction } from "../actions";

const initialState = {
  orders: [],
  completedOrders: [],
};

export default function orders(state = initialState, action) {
  switch (action.type) {
    case addAction:
      return {
        orders: [...state.orders, action.order],
        completedOrders: state.completedOrders,
      };
    case removeAction:
      return {
        orders: state.orders.filter((item) => item.id !== action.id),
        completedOrders: state.completedOrders,
      };
    case changeStageAction:
      const order = state.orders.find((item) => item.id === action.id);
      console.log(action);
      console.log(order);
      order.stage = action.newStage;
      if (order.stage === "picked") {
        return {
          orders: [...state.orders.filter((item) => item.id !== action.id)],
          completedOrders: [...state.completedOrders, order],
        };
      }
      return {
        orders: [
          ...state.orders.filter((item) => item.id !== action.id),
          order,
        ],
        completedOrders: state.completedOrders,
      };
    default:
      return state;
  }
}
