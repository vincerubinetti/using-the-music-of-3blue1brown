import React from 'react';

import { lastPage } from './pages';
import { ReactComponent as Loading } from './loading.svg';

// nav bar component with back/next/submit buttons
export default ({
  pageNumber,
  forward,
  back,
  onSubmit,
  values,
  isValid,
  submitting
}) => {
  // determine if current page is last question and form can be submitted
  let lastQuestion;
  if (values.categories.find((cat) => cat.includes('video')))
    lastQuestion = lastPage - 1;
  else
    lastQuestion = lastPage - 1 - 2;

  // quick booleans for "is first page", "is last question", etc
  const first = pageNumber === 0;
  const penult = pageNumber === lastQuestion;
  const last = pageNumber === lastPage;

  // render component
  if (last)
    return <></>;
  else if (first) {
    return (
      <div className='nav'>
        <button type='button' onClick={forward}>
          Start
        </button>
      </div>
    );
  } else {
    return (
      <div className='nav'>
        <button type='button' onClick={back}>
          Back
        </button>
        <button
          type='button'
          disabled={!isValid ? true : undefined}
          onClick={() => {
            if (penult)
              onSubmit(values);
            else
              forward();
          }}
        >
          {!submitting && (penult ? 'Submit' : 'Next')}
          {submitting && <Loading />}
        </button>
      </div>
    );
  }
};
