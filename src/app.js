import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Formik } from 'formik';
import { Form } from 'formik';

import { pages } from './pages';
import { lastPage } from './pages';
import { initialValues } from './pages';
import Nav from './nav';
import Persist from './persist';
import { submitForm } from './submit';

import './app.css';

// main app component
export default () => {
  // which step user is on
  const [pageNumber, setPageNumber] = useState(0);
  // if form is in process of submitting
  const [submitting, setSubmitting] = useState(false);

  // functions to navigate through steps
  const forward = () => setPageNumber((pageNumber) => pageNumber + 1);
  const back = () => setPageNumber((pageNumber) => pageNumber - 1);
  const finish = () => setPageNumber(lastPage);

  // get component of current page to render
  const CurrentPage = pages[pageNumber].component;
  // only validate the current step that is being displayed
  const currentValidationSchema = pages[pageNumber].validation;

  // when form is submitted
  const onSubmit = async (values) => {
    // debug
    console.groupCollapsed('Submitting form');
    console.log(values);
    console.groupEnd();

    // set loading spinner
    setSubmitting(true);

    // submit form and go to thank you page if successful, or error if not
    if (await submitForm(values))
      finish();
    else {
      alert(
        'Sorry, there was an issue sending your email. Please try again or contact me directly at vince@vincentrubinetti.com'
      );
    }

    // unset loading spinner
    setSubmitting(false);
  };

  // when page changes, select the first input on page, or next button
  useEffect(() => {
    document.activeElement.blur();
    const firstInput = document.querySelector(
      '.control input, .control textarea, button:nth-child(2)'
    );
    if (firstInput)
      firstInput.focus();
  }, [pageNumber]);

  // render app
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={currentValidationSchema}
        initialErrors={{ email: '' }}
        onSubmit={() => {
          console.log('Browser form submit');
          return null;
        }}
      >
        {(props) => (
          <Form>
            <CurrentPage {...props} />
            <Nav
              {...{ pageNumber, forward, back, onSubmit, submitting }}
              {...props}
            />
            <Persist />
          </Form>
        )}
      </Formik>
    </>
  );
};
