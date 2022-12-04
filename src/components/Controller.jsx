import { useContext, useEffect } from "react";
import { useFormikContext } from "formik";
import { AppContext } from "../App";
import { save } from "../persist";

// controller for global form logic, e.g. validation
const Controller = () => {
  const { page } = useContext(AppContext);
  const { values, validateForm } = useFormikContext();

  // when form values change
  useEffect(() => {
    save(values);
  }, [values]);

  // when form values change, or page changes
  useEffect(() => {
    // re-run validation
    validateForm();
  }, [values, page, validateForm]);

  // when page changes
  useEffect(() => {
    // automatically focus element of interest
    document.activeElement.blur();
    document.querySelector("input, textarea, .next")?.focus();
  }, [page]);

  return null;
};

export default Controller;
