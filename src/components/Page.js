import { useContext } from "react";
import { useFormikContext } from "formik";
import { AppContext } from "../App";
import Button from "../components/Button";
import { pages, isLast } from "../pages";
import "./Page.css";

// layout for each page
const Page = ({ title, description, children }) => {
  const { page, setPage, submitting, submitForm } = useContext(AppContext);
  const { values, errors } = useFormikContext();

  // get validation props
  const fieldValid = !errors[pages[page].key];
  const formValid = Object.keys(errors).length === 0;
  const lastQuestion = isLast(page, values);

  // are we on first page
  const first = page === 0;
  // are we on last page
  const last = page === pages.length - 1;

  // determine back button
  const prev = <Button text="Back" onClick={() => setPage(page - 1)} />;

  // determine forward button
  let text = "Next";
  let onClick = () => setPage(page + 1);
  if (first) text = "Start";
  if (formValid && lastQuestion) {
    text = "Submit";
    onClick = () => submitForm(values);
  }
  const next = (
    <Button
      className="next"
      disabled={!fieldValid || submitting}
      text={text}
      loading={submitting}
      onClick={onClick}
    />
  );

  // get error message
  const error = (errors || {})[pages[page]?.key];

  return (
    <>
      {title && <h2>{title}</h2>}
      <p className="description">{description}</p>

      {children}
      <p className="error">{error}&nbsp;</p>

      {!last && (
        <div className="nav">
          {!first && prev}
          {next}
        </div>
      )}
    </>
  );
};

export default Page;
