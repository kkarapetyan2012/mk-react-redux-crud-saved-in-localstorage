export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

export function addPost(name, id) {
  return {
    type: ADD_ITEM,
    name,
    id,
  };
}

export function removePost(id) {
  return {
    type: REMOVE_ITEM,
    id,
  };
}

export function updatePost(id, name) {
  return {
    type: UPDATE_ITEM,
    id,
    name,
  };
}
