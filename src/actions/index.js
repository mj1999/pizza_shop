export const addAction = "ADD_ORDER";
export const removeAction = "REMOVE_ORDER";
export const changeStageAction = "CHANGE_STAGE";

let id = 0;
export function addOrder(order) {
  id++;
  return {
    type: addAction,
    order: { ...order, id },
  };
}

export function removeOrder(id) {
  return {
    type: removeAction,
    id,
  };
}

export function changeStage(id, newStage) {
  return {
    type: changeStageAction,
    id,
    newStage,
  };
}
