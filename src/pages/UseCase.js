import { string } from "yup";
import Page from "../components/Page";
import Textbox from "../components/Textbox";

// use case page
const Component = () => (
  <Page
    title="Describe in detail HOW you plan to use the music"
    description="Tell me as much as you can about your project. FOR EXAMPLE: Where will it be uploaded? Who will see it? Is it monetized? Are you a new creator? Is it for education? What are the topics?"
  >
    <Textbox name={key} multi={true} />
  </Page>
);

const key = "useCase";

const initialValue = "";

const validation = string()
  .required("Required")
  .min(120, "Please write at least a few sentences. This is important to me.");

export { Component, key, initialValue, validation };
