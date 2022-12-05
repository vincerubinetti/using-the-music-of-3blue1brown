import { Field } from "formik";
import "./Textbox.css";

const Textbox = ({ type, name, multi = false }) => (
  <Field
    aria-labelledby="label"
    aria-describedby="description"
    required={true}
    className="textbox"
    type={type}
    name={name}
    component={multi ? "textarea" : null}
    style={{
      maxWidth: multi ? "unset" : "300px",
      minHeight: multi ? "10em" : "unset",
    }}
  />
);

export default Textbox;
