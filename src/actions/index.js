const addAction = "ADD_ORDER";

export function addOrder(order) {
  return {
    type: addAction,
    order,
  };
}
