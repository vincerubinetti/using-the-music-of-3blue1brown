import { string } from "yup";
import Page from "../components/Page";
import Textbox from "../components/Textbox";

// email page
const Component = () => (
  <Page
    title="Your email address"
    description="The form will send an automatic response to this address when you're done"
  >
    <Textbox type="email" name={key} />
  </Page>
);

const key = "email";

const initialValue = "";

const validation = string().email("Invalid email").required("Required");

export { Component, key, initialValue, validation };
