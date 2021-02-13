const initialState = {
  tasks: [],
  form: {
    text: "",
    category: "other",
  },
  selectedCategory: "none",
};

const toDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = {
        id: state.tasks.length ? state.tasks[state.tasks.length - 1].id + 1 : 1,
        text: action.text,
        category: action.category,
        isDone: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
        form: {
          text: "",
          category: state.form.category,
        },
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };

    case "COMPLETE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            return {
              ...task,
              isDone: true,
            };
          }
          return task;
        }),
      };

    case "UNCOMPLETE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            return {
              ...task,
              isDone: false,
            };
          }
          return task;
        }),
      };

    case "CHANGE_FORM_TEXT":
      return {
        ...state,
        form: {
          text: action.text,
          category: state.form.category,
        },
      };

    case "CHANGE_FORM_TYPE":
      return {
        ...state,
        form: {
          text: state.form.text,
          category: action.category,
        },
      };

    case "SELECT_CATEGORY":
      return {
        ...state,
        selectedCategory: action.category,
      };

    default:
      return state;
  }
};

export const addTask = (text, category) => ({
  type: "ADD_TASK",
  text,
  category,
});
export const deleteTask = (id) => ({ type: "DELETE_TASK", id });
export const completeTask = (id) => ({ type: "COMPLETE_TASK", id });
export const unCompleteTask = (id) => ({ type: "UNCOMPLETE_TASK", id });
export const changeFormText = (text) => ({ type: "CHANGE_FORM_TEXT", text });
export const changeFormType = (category) => ({
  type: "CHANGE_FORM_TYPE",
  category,
});
export const selectCategory = (category) => ({
  type: "SELECT_CATEGORY",
  category,
});

export default toDoListReducer;
