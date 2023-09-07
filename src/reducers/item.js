import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../actions";

const initialState = [];

export default function Post(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          name: action.title,
        },
      ];
    case REMOVE_ITEM:
      return state.filter(({ id }) => id !== action.id);
    case UPDATE_ITEM:
      return state.map((item) =>
        item.id === action.id ? { ...item, ...action } : item
      );
    default:
      return state;
  }
}
