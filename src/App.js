import { useState } from "react";
import "./App.scss";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [formValue, setFormValue] = useState("");
  const [latestUsedId, setLatestUsedId] = useState(1);

  const addTask = (e) => {
    e.preventDefault();
    if (formValue) {
      const newTask = {
        id: latestUsedId,
        value: formValue,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      setLatestUsedId(latestUsedId + 1);
      setFormValue("");
    }
  };

  const changeFormValue = (e) => {
    setFormValue(e.target.value);
  };

  const completeTask = (id) => {
    const newTasks = [...tasks];
    newTasks.forEach((task) => {
      if (task.id === id) {
        task.isDone = true;
      }
    });
    setTasks(newTasks);
  };

  const unCompleteTask = (id) => {
    const newTasks = [...tasks];
    newTasks.forEach((task) => {
      if (task.id === id) {
        task.isDone = false;
      }
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div class='wrapper'>
      <form onSubmit={addTask}>
        <input value={formValue} onChange={changeFormValue} />
        <button type="submit">Submit</button>
      </form>
      <ol className="list">
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <div className="listItem">
                <span
                  className={task.isDone ? "doneTask" : null}
                  onClick={
                    task.isDone
                      ? () => {
                          unCompleteTask(task.id);
                        }
                      : () => {
                          completeTask(task.id);
                        }
                  }
                >
                  <a className="link" href="#s">
                    {task.value}
                  </a>
                </span>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

const App = () => {
  return (
    <div className="wrapper">
      <ToDoList />
    </div>
  );
};

export default App;
