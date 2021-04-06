import React from 'react';
import { Field } from 'formik';

import Page from './page';

// description question component
export default (props) => (
  <Page
    title='Describe in detail HOW you plan to use the music'
    description='Tell me as much as you can about your project. For example: Where will it be uploaded? Who will see it? Is it monetized? Are you a new creator? Is it for education? What are the topics?'
    valueKey='description'
    {...props}
  >
    <Field className='textarea' name='description' component='textarea' />
  </Page>
);
