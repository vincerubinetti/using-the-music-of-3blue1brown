import React from 'react';
import { Field } from 'formik';

import Page from './page';

// email question component
export default (props) => (
  <Page
    title='Your email address'
    description='So I can respond to you'
    valueKey='email'
    {...props}
  >
    <Field className='textbox' type='email' name='email' />
  </Page>
);
