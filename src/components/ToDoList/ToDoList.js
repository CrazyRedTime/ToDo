import ListItem from "./ListItem/ListItem";
import ToDoListStyles from "./ToDoList.module.scss";
import { Button , Form } from 'react-bootstrap';
import LinkButton from '../LinkButton/LinkButton';



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
    };
    console.log(tasks);
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
        <Form.Group>
          <form className={ToDoListStyles.FormSubmit} onSubmit={submit}>

            <Form.Control className={ToDoListStyles.inputTask} value={form.text} onChange={changeText} placeholder="Enter task" />

            <Form.Control className={ToDoListStyles.selectCategory} as="select" value={form.category} onChange={changeType}>
              {categories.map((category, index) => <option key={index }value={category.value}>{category.value}</option>)}
            </Form.Control>
            <Button variant="primary" type="submit">Submit</Button>
          </form>
      </Form.Group>


      
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
      <div className={ToDoListStyles.filterWrapper}>
        <div className={ToDoListStyles.filterWrapperInfo}>
          <h6 className={ToDoListStyles.filterTitle}>Filter:</h6>
          <Form.Group>
            <Form.Control as="select" className={ToDoListStyles.filter} value={selectedCategory} onChange={select}>
              <option value="none">none</option>
              {categories.map((category, index) => <option key={index }value={category.value}>{category.value}</option>)}
            </Form.Control>
          </Form.Group>
        </div>
        <LinkButton to="/settings">Settings</LinkButton>
      </div>
    </div>
  );
};

export default ToDoList;
