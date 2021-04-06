import React from 'react';
import { Field } from 'formik';
import { FieldArray } from 'formik';

import Page from './page';

// list of categories
const categories = [
  'In a school project or thesis, as a student',
  'In a classroom lesson, as a teacher',
  'In an online video, on YouTube, Vimeo, Twitch, Twitter, Instagram, Brilliant, Skillshare, etc',
  'In an internal production, as a company',
  'In an online advertisement or promo',
  'In a live performance or broadcast',
  'In film, TV, radio, podcasts, games, or apps',
  'Other'
];

// categories question component
export default (props) => (
  <Page
    title='Which of these describe how you plan to use the music?'
    description='To help me automatically categorize your use case. Select all that apply.'
    valueKey='categories'
    {...props}
  >
    <FieldArray name='categories'>
      {(arrayHelpers) =>
        categories.map((category, index) => (
          <label key={index} className='checkbox' htmlFor={'category_' + index}>
            <Field
              type='checkbox'
              id={'category_' + index}
              name={'category_' + index}
              checked={props.values.categories.includes(category)}
              onChange={(event) => {
                if (event.target.checked)
                  arrayHelpers.push(category);
                else {
                  arrayHelpers.remove(
                    props.values.categories.indexOf(category)
                  );
                }
              }}
            />
            <span>{category}</span>
          </label>
        ))
      }
    </FieldArray>
  </Page>
);
