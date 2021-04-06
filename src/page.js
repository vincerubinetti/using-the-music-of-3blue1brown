import React from 'react';
import { useEffect } from 'react';

// generic page component
export default ({
  title,
  description,
  valueKey,
  errors,
  validateForm,
  children
}) => {
  // revalidate form step any time page rerenders
  useEffect(() => {
    validateForm();
  }, [validateForm]);

  return (
    <>
      <h3>{title}</h3>
      {description && <h4>{description}</h4>}
      <div className='control'>
        {children}
        <div className='error'>{errors[valueKey]}&nbsp;</div>
      </div>
    </>
  );
};
