import { Field } from "formik";
import "./Textbox.css";

const Textbox = ({ type, name, multi = false }) => (
  <Field
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
