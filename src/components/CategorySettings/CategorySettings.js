import SettingsStyles from "./CategorySettings.module.scss";
import { Button, Form } from "react-bootstrap";
import LinkButton from '../LinkButton/LinkButton';

const Settings = ({
  categories,
  formValue,
  addCategory,
  deleteCategory,
  selectedCategory,
  changeFormValue,
}) => {
  const changeText = (e) => {
    changeFormValue(e.target.value);
  };

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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </Form.Group>
      {categories.map((category) => (
        <div key={category.id} className={SettingsStyles.category}>
          <p className={SettingsStyles.textmain}>{category.value}</p>
          <Button
            variant="danger"
            onClick={() => {
              console.log(selectedCategory);
              if (category.value !== selectedCategory) {
                deleteCategory(category.id);
              }
            }}
          >
            Delete
          </Button>
        </div>
      ))}
      <div className={SettingsStyles.bottom}>
        <h5 className={SettingsStyles.settingsTitle}>You can't delete selected category</h5>
      <LinkButton className={SettingsStyles.link} to='/list'>Go back</LinkButton>
      </div>
    </>
  );
};

export default Settings;
