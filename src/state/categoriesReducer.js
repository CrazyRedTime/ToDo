

const initialState = {
  categories: [{ value: "work", id: 1 }, { value: "home", id: 2 }, { value: "other", id: 3 }],
  formValue: ''
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CATEGORY":
      const newCategory = {
        value: action.value,
        id: state.categories[state.categories.length - 1].id + 1
      };
      return {
        ...state,
        categories: [...state.categories, newCategory],
        formValue: ''
      };

    case "DELETE_CATEGORY":
      if (state.categories.length > 1) {
        return {
          ...state,
          categories: [
            ...state.categories.filter(
              (category) => category.id !== action.id
            ),
          ],
        }
      };
      return {
        ...state
      }

    case "CHANGE_FORM_VALUE":
      return {
        ...state,
        formValue: action.value
      }

    default: {
      return state;
    }
  }
};

export const addCategory = (value) => ({ type: 'ADD_CATEGORY', value});
export const deleteCategory = (id) => ({ type: 'DELETE_CATEGORY', id});
export const changeFormValue = (value) => ({ type: 'CHANGE_FORM_VALUE', value})

export default categoriesReducer;
