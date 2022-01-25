import { string } from "yup";
import Page from "../components/Page";
import Textbox from "../components/Textbox";

// email page
const Component = () => (
  <Page title="Your email address" description="So I can respond to you">
    <Textbox type="email" name={key} />
  </Page>
);

const key = "email";

const initialValue = "";

const validation = string().email("Invalid email").required("Required");

export { Component, key, initialValue, validation };
