import { NavLink } from "react-router-dom";
import SettingsStyles from "./CategorySettings.module.scss";
import { Button , Form } from 'react-bootstrap';

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
      <Form.Group>
        <form className={SettingsStyles.form} onSubmit={submit}>
          <Form.Control
            value={formValue}
            onChange={changeText}
            placeholder="Enter category"
            className={SettingsStyles.input}
          />
          <Button variant="success" type="submit">Submit</Button>
        </form>
      </Form.Group>
      {categories.map((category) => (
        <div key={category.id} className={SettingsStyles.category}>
          <p className={SettingsStyles.textmain}>
            {category.value}
          </p>
          <Button variant="danger" onClick={() => deleteCategory(category.id)}>Delete</Button>
          
        </div>
      ))}
      <NavLink className={SettingsStyles.link} to="/list">
       Go back
      </NavLink>
    </>
  );
};

export default Settings;
