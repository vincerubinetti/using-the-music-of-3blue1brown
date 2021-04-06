import React from 'react';
import { Field } from 'formik';

import Page from './page';

// list of subscribers
const a = (10000).toLocaleString();
const b = (500000).toLocaleString();
const subscribers = [`< ${a}`, `${a} to ${b}`, `> ${b}`];

// subscribers question component
export default (props) => (
  <Page
    title={
      <>
        How many subscribers/
        <wbr />
        followers/
        <wbr />
        viewers do you have?
      </>
    }
    description='Since you said you would be using the music in an online video'
    valueKey='subscribers'
    {...props}
  >
    {subscribers.map((count, index) => (
      <label key={index} className='checkbox' htmlFor={'subscribers_' + index}>
        <Field
          type='radio'
          id={'subscribers_' + index}
          name={'subscribers_' + index}
          checked={props.values.subscribers === count}
          onChange={() => props.setFieldValue('subscribers', count)}
        />
        <span>{count}</span>
      </label>
    ))}
  </Page>
);
