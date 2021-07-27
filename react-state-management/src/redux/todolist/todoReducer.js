import { ADD, DEL, LOAD } from "./actions.js";

//initial stata /kondisi awal -> ketika object di load pertama kali
const initState = {
  todos: [],
};

//reducer function
export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      const { id, todo } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: id,
            todo: todo,
          },
        ],
      };
    case DEL:
      const afterDelete = state.todos.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        todos: afterDelete,
      };
    default:
      return state;
  }
};
