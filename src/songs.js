import React from 'react';
import { Field } from 'formik';
import { FieldArray } from 'formik';

import Page from './page';

// list of songs
const songs = [
  'Zeta',
  'Heartbeat',
  'Sixes',
  "Euler's Clock",
  'The Wallis Ballade',
  'Stepwise',
  'Quaternions',
  'Reflections',
  'Resonance',
  'Serendipity',
  'Trinkets',
  'Hypothesis',
  'Wading',
  'Centroid',
  'Spirals'
];

// songs question component
export default (props) => (
  <Page title='Which songs do you want to use?' valueKey='songs' {...props}>
    <FieldArray name='songs'>
      {(arrayHelpers) =>
        songs.map((song, index) => (
          <label key={index} className='checkbox' htmlFor={'song_' + index}>
            <Field
              type='checkbox'
              id={'song_' + index}
              name={'song_' + index}
              checked={props.values.songs.includes(song)}
              onChange={(event) => {
                if (event.target.checked)
                  arrayHelpers.push(song);
                else
                  arrayHelpers.remove(props.values.songs.indexOf(song));
              }}
            />
            <span>{song}</span>
          </label>
        ))
      }
    </FieldArray>
  </Page>
);
