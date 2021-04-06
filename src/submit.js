import React from 'react';
import { renderToString } from 'react-dom/server';

import Response from './response';
import { sendEmail } from './util';
import { htmlToPlain } from './util';

// form submission logic
export const submitForm = async (values) => {
  // get key values from form submission
  const { name, email, categories, subscribers } = values;

  // determine "level" of use
  const level = getLevel({ categories, subscribers });

  // render html string to be put in body of response email
  const response = renderToString(<Response {...values} level={level} />);

  // debug
  console.groupCollapsed('Response');
  console.log(response);
  console.groupEnd();

  // send email
  const status = await sendEmail({
    fromAddress: 'vince@vincentrubinetti.com',
    fromName: 'Vincent Rubinetti',
    ccAddress: 'vince@vincentrubinetti.com',
    ccName: 'Vincent Rubinetti',
    toAddress: email,
    toName: name,
    subject: 'Using the music of 3Blue1Brown form response',
    html: response,
    plain: htmlToPlain(response)
  });

  // debug
  console.groupCollapsed('Email status');
  console.log(status);
  console.groupEnd();

  // check whether email sent successfully
  return status.includes('Mail sent successfully!');
};

// determine "level" of use based on form answers
export const getLevel = ({ categories, subscribers }) => {
  const evaluateCategory = (category) => {
    if (category.includes('student'))
      return 1;
    if (category.includes('teacher'))
      return 1;
    if (category.includes('video')) {
      if (subscribers.includes('<'))
        return 1;
      if (subscribers.includes('to'))
        return 2;
      return 4;
    }
    if (category.includes('company'))
      return 3;
    if (category.includes('online'))
      return 3;
    if (category.includes('live'))
      return 4;
    if (category.includes('film'))
      return 4;
    if (category.includes('other'))
      return 4;
    return 4;
  };

  // return highest (most restrictive) level category that user checked
  return Math.max(...categories.map(evaluateCategory));
};
