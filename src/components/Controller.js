import { useContext, useEffect } from "react";
import { useFormikContext } from "formik";
import { AppContext } from "../App";

// local storage key
const key = "using-the-music-of-3blue1brown";

// controller for global form logic, e.g. validation
const Controller = () => {
  const { page } = useContext(AppContext);
  const { values = {}, setFieldValue, validateForm } = useFormikContext();

  // on first render
  useEffect(() => {
    // load form state from storage
    try {
      const state = JSON.parse(window.localStorage[key]);
      for (const [key, value] of Object.entries(state))
        setFieldValue(key, value);
      // debug
      console.groupCollapsed("Form state loaded");
      console.log(state);
      console.groupEnd();
    } catch (error) {
      console.log("Couldn't load form state");
    }
  }, [setFieldValue]);

  // when form values change
  useEffect(() => {
    // save form state to storage
    try {
      window.localStorage[key] = JSON.stringify(values);
      // debug
      console.groupCollapsed("Form state saved");
      console.log(values);
      console.groupEnd();
    } catch (error) {
      console.log("Couldn't save form state");
    }
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
