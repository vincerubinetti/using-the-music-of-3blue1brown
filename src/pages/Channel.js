import { string } from "yup";
import Page from "../components/Page";
import Textbox from "../components/Textbox";

// channel page
const Component = () => (
  <Page
    title="What is your channel/user name?"
    description="Since you said you would be using the music in an online video"
  >
    <Textbox name={key} />
  </Page>
);

const key = "channel";

const initialValue = "";

const validation = string().when("categories", {
  is: (selectedCategories) =>
    selectedCategories.find((cat) => cat.includes("video")),
  then: (schema) =>
    schema.required("Required").min(4, "Please write your full channel name"),
});

export { Component, key, initialValue, validation };
