import { NavLink } from "react-router-dom";
import SettingsStyles from "./CategorySettings.module.scss";

const Settings = ({ categories, formValue, addCategory, deleteCategory, changeFormValue }) => {

  const changeText = (e) => {
    changeFormValue(e.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    if (formValue) {
      addCategory(formValue);
    }
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          value={formValue}
          onChange={changeText}
          className={SettingsStyles.textInput}
        />
        <button type="submit">Submit</button>
      </form>
      {categories.map((category) => (
        <div className={SettingsStyles.category}>
          <div key={category.id} >
          {category.value}
          </div>
          <button onClick={() => deleteCategory(category.id)}>Delete</button>
        </div>
      ))}
      <NavLink className={SettingsStyles.link} to="/list">
        <button className={SettingsStyles.button}>Go back</button>
      </NavLink>
    </>
  );
};

export default Settings;
