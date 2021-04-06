import { useState } from 'react';
import { useEffect } from 'react';
import { useFormikContext } from 'formik';

const key = 'using-the-music-of-3blue1brown';

export default () => {
  const [firstRender, setFirstRender] = useState(true);
  const { values = {}, setFieldValue } = useFormikContext();

  useEffect(() => {
    setFirstRender(false);
  }, []);

  // on first render
  useEffect(() => {
    // load form state from storage
    try {
      let state = window.localStorage[key];
      state = JSON.parse(state);
      for (const [key, value] of Object.entries(state))
        setFieldValue(key, value);

      // debug
      console.groupCollapsed('Form state loaded');
      console.log(state);
      console.groupEnd();
    } catch (error) {
      console.log("Couldn't load form state");
    }
  }, [setFieldValue]);

  // on each value change
  useEffect(() => {
    if (firstRender)
      return;

    // save form state to storage
    try {
      window.localStorage[key] = JSON.stringify(values);

      // debug
      console.groupCollapsed('Form state saved');
      console.log(values);
      console.groupEnd();
    } catch (error) {
      console.log("Couldn't save form state");
    }
  }, [firstRender, values]);

  return null;
};
