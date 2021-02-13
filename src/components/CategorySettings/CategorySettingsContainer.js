import { addCategory, deleteCategory, changeFormValue } from '../../state/categoriesReducer';
import { connect } from "react-redux";
import CategorySettings from './CategorySettings';

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    formValue: state.categories.formValue,
    selectedCategory: state.toDoList.form.category,
  }
};

const CategorySettingsContainer = connect(mapStateToProps, { addCategory, deleteCategory, changeFormValue })(CategorySettings);

export default CategorySettingsContainer;