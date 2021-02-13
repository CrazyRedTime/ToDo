import Styles from "./App.module.scss";
import ToDoListContainer from "./components/ToDoList/ToDoListContainer";
import { Route, Redirect} from "react-router-dom";
import CategorySettingsContainer from './components/CategorySettings/CategorySettingsContainer';

const App = () => {
  return (
    <div className={Styles.wrapper}>
      <h1 className={Styles.title}>TODO APP</h1>
      <div className={Styles.mainWrapper}>      
      <Route exact path="/">
        <Redirect to="/list" />
      </Route>
      <Route
          path="/list"
          render={() => <ToDoListContainer />}
        />
      <Route
          path="/settings"
          render={() => <CategorySettingsContainer />}
      />
      </div>
    </div>
  );
};

export default App;
