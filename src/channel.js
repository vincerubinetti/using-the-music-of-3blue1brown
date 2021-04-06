import React from 'react';
import { Field } from 'formik';

import Page from './page';

// channel name question component
export default (props) => (
  <Page
    title='What is your channel/user name?'
    description='Since you said you would be using the music in an online video'
    valueKey='channel'
    {...props}
  >
    <Field className='textbox' name='channel' />
  </Page>
);
