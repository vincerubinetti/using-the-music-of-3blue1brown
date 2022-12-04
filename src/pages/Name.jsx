import { string } from "yup";
import Page from "../components/Page";
import Textbox from "../components/Textbox";

// name page
const Component = () => (
  <Page title="Your full name" description="So I can properly address you">
    <Textbox name={key} />
  </Page>
);

const key = "name";

const initialValue = "";

const validation = string()
  .required("Required")
  .min(4, "Please write your full name");

export { Component, key, initialValue, validation };
