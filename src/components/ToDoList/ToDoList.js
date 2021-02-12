import ListItem from "./ListItem/ListItem";
import ToDoListStyles from "./ToDoList.module.scss";
import {NavLink} from 'react-router-dom';

const ToDoList = ({
  tasks,
  categories,
  form,
  selectedCategory,
  addTask,
  deleteTask,
  completeTask,
  unCompleteTask,
  changeFormText,
  changeFormType,
  selectCategory,
}) => {
  const submit = (e) => {
    e.preventDefault();
    if (form.text) {
      addTask(form.text, form.category);
    }
  };

  const changeText = (e) => {
    changeFormText(e.target.value);
  };

  const changeType = (e) => {
    changeFormType(e.target.value);
  };

  const select = (e) => {
    selectCategory(e.target.value);
  };

  const likeAFilter = (tasks, filter) => {
    return tasks.filter((task) => task.category === filter);
  };

  const filteredTasks =
    selectedCategory === "none" ? tasks : likeAFilter(tasks, selectedCategory);

  return (
    <div className={ToDoListStyles.wrapper}>
      <div className={ToDoListStyles.input}>
      <form onSubmit={submit}>
        <input
          value={form.text}
          onChange={changeText}
          className={ToDoListStyles.textInput}
        />
        <select value={form.category} onChange={changeType}>
          {categories.map((category, index) => <option key={index }value={category.value}>{category.value}</option>)}
        </select>
        <button type="submit">Submit</button>
      </form>
      <NavLink className={ToDoListStyles.link} to="/settings"><button>Settings</button></NavLink>
      </div>
      <div className={ToDoListStyles.list}>
        {filteredTasks.map((task, index) => {
          return (
            <ListItem
              number={index}
              key={task.id}
              id={task.id}
              text={task.text}
              category={task.category}
              isDone={task.isDone}
              deleteTask={deleteTask}
              completeTask={completeTask}
              unCompleteTask={unCompleteTask}
            />
          );
        })}
      </div>
      <select className={ToDoListStyles.filter} value={selectedCategory} onChange={select}>
        <option value="none">none</option>
        {categories.map((category, index) => <option key={index }value={category.value}>{category.value}</option>)}
      </select>
    </div>
  );
};

export default ToDoList;
