import { useState, createContext } from "react";
import { Formik, Form } from "formik";
import Controller from "./components/Controller";
import Nav from "./components/Nav";
import { pages, initialValues, validationSchema } from "./pages";
import { submit } from "./submit/submit";
import log from "./util/debug";
import "./App.css";

export const AppContext = createContext({});

const App = () => {
  // current page index
  const [page, setPage] = useState(0);
  // is form in process of submitting
  const [submitting, setSubmitting] = useState(false);

  // when form is submitted
  const submitForm = async (values) => {
    log("Submitting form", values);

    // set loading spinner
    setSubmitting(true);

    // submit form
    // if successful
    if (await submit(values))
      // go to thank you page
      setPage(pages.length - 1);
    // if error
    else {
      // alert user to try again
      alert(
        "Sorry, there was an issue sending your email. Please try again or contact me directly at vince@vincentrubinetti.com"
      );
    }

    // unset loading spinner
    setSubmitting(false);
  };

  // get props of current page
  const { Component: Page = <></> } = pages[page];

  return (
    <AppContext.Provider value={{ page, setPage, submitting, submitForm }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={() => null}
      >
        <Form>
          <Controller />
          <Page />
          <Nav />
        </Form>
      </Formik>
    </AppContext.Provider>
  );
};

export default App;
