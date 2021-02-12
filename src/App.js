import Styles from "./App.module.scss";
import ToDoListContainer from "./components/ToDoList/ToDoListContainer";

const App = () => {
  return (
    <div className={Styles.wrapper}>
      <ToDoListContainer />
    </div>
  );
};

export default App;
