import { addTask, deleteTask, completeTask, unCompleteTask, changeFormText, changeFormType, selectCategory } from '../../state/toDoListReducer';
import { connect } from "react-redux";
import ToDoList from './ToDoList';

const mapStateToProps = (state) => {
  return {
    tasks: state.toDoList.tasks,
    form: state.toDoList.form,
    selectedCategory: state.toDoList.selectedCategory
  }
};

const ToDoListContainer = connect(mapStateToProps, { addTask, deleteTask, completeTask, unCompleteTask, changeFormText, changeFormType, selectCategory })(ToDoList);

export default ToDoListContainer;
