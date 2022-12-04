import { useFormikContext } from "formik";
import { string } from "yup";
import Page from "../components/Page";
import Checkbox from "../components/Checkbox";

// list of subscriber brackets
const a = (10000).toLocaleString();
const b = (500000).toLocaleString();
const brackets = [`< ${a}`, `${a} to ${b}`, `> ${b}`];

// channel page
const Component = () => {
  const { values, setFieldValue } = useFormikContext();
  const selected = values[key];

  return (
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
      description="Since you said you would be using the music in an online video"
    >
      {brackets.map((bracket, index) => (
        <Checkbox
          key={index}
          id={"subscribers_" + index}
          checked={selected === bracket}
          onChange={() => setFieldValue(key, bracket)}
          label={bracket}
        />
      ))}
    </Page>
  );
};

const key = "subscribers";

const initialValue = "";

const validation = string().when("categories", {
  is: (selectedCategories) =>
    selectedCategories.find(
      (cat) => cat.includes("video") || cat.includes("SoME")
    ),
  then: (schema) => schema.required("Required"),
});

export { Component, key, initialValue, validation };
