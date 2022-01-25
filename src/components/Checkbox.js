import { Field } from "formik";
import "./Checkbox.css";

const Checkbox = ({ id, checked, onChange, label }) => (
  <label className="checkbox" htmlFor={id}>
    <Field
      type="checkbox"
      id={id}
      name={id}
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
    />
    <span>{label}</span>
  </label>
);

export default Checkbox;
