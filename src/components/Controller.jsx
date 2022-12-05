import { useContext, useEffect } from "react";
import { useFormikContext } from "formik";
import { AppContext } from "../App";
import { save } from "../util/persist";

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
    document.querySelector("input, textarea")?.focus();
    // scroll to top
    window.setTimeout(() => window.scrollTo(0, 0), 500);
  }, [page]);

  return null;
};

export default Controller;
