import ListItemStyles from "./ListItem.module.scss";
import classnames from "classnames";
import { Button } from 'react-bootstrap';

const ListItem = ({
  number,
  id,
  text,
  category,
  isDone,
  completeTask,
  unCompleteTask,
  deleteTask,
}) => {
  const complete = () => {
    completeTask(id);
  };

  const unComplete = () => {
    unCompleteTask(id);
  };

  const taskClasses = classnames(ListItemStyles.pointer, {
    [`${ListItemStyles.doneTask}`]: isDone,
  });

  return (
    <div className={ListItemStyles.listItem}>
      <div className={ListItemStyles.text}>
        <div className={taskClasses} onClick={isDone ? unComplete : complete}>
          {`${number+1}. ${text}`}
        </div>
        <div className={ListItemStyles.category}>{category}</div>
      </div>
      <Button variant="danger" onClick={() => deleteTask(id)}>Delete</Button>
    </div>
  );
};

export default ListItem;
