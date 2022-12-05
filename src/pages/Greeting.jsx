import Page from "../components/Page";
import cover from "../assets/cover.png";
import "./Greeting.css";

// start greeting page
const Component = () => (
  <Page>
    <img src={cover} className="logo" alt="" />
    <h1>Using The Music of 3Blue1Brown</h1>
    <p>In personal, educational, or professional projects</p>
  </Page>
);

export { Component };
