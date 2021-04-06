import React from 'react';
import { Field } from 'formik';

import Page from './page';

// name question component
export default (props) => (
  <Page
    title='Your name'
    description='So I can properly address you'
    valueKey='name'
    {...props}
  >
    <Field className='textbox' name='name' />
  </Page>
);
