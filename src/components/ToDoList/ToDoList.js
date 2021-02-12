import ListItem from "../ListItem/ListItem";
import ToDoListStyles from "./ToDoList.module.scss";

const ToDoList = ({
  tasks,
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
      <form onSubmit={submit}>
        <input
          value={form.text}
          onChange={changeText}
          className={ToDoListStyles.textInput}
        />
        <select value={form.category} onChange={changeType}>
          <option value="work">работа</option>
          <option value="home">дом</option>
          <option value="other">другое</option>
        </select>
        <button type="submit">Submit</button>
      </form>
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
        <option value="none">без фильтра</option>
        <option value="work">работа</option>
        <option value="home">дом</option>
        <option value="other">другое</option>
      </select>
    </div>
  );
};

export default ToDoList;
