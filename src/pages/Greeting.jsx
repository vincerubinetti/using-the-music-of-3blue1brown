import Page from "../components/Page";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./Greeting.css";

// start greeting page
const Component = () => (
  <Page>
    <Logo className="logo" />
    <h1>Using the music of 3Blue1Brown</h1>
    <p>
      I receive a lot of requests to use the{" "}
      <a href="https://vincerubinetti.bandcamp.com/album/the-music-of-3blue1brown">
        music of 3Blue1Brown
      </a>{" "}
      in various personal, educational, and professional projects. To help me
      keep track of them and respond more quickly, I've made this simple form.
    </p>
    <p>
      Please take a moment to answer a few questions.{" "}
      <i>
        The form will automatically send you an email response when you're done
      </i>
      .
    </p>
    <p>
      If you have any issues, contact me at{" "}
      <a href="mailto:vince@vincentrubinetti.com">
        vince@
        <wbr />
        vincent
        <wbr />
        rubinetti.com
      </a>
      . If you just want to listen to the music,{" "}
      <i>you don't need to fill out this form</i>; just{" "}
      <a href="https://vincerubinetti.bandcamp.com/album/the-music-of-3blue1brown">
        download the music on Bandcamp
      </a>
      . It's free!
    </p>
  </Page>
);

export { Component };
