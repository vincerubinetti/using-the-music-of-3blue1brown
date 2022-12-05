import Page from "../components/Page";
import "./Greeting.css";

// start greeting page
const Component = () => (
  <Page>
    <h2>Why this form?</h2>
    <p>
      I receive a lot of requests to use{" "}
      <a href="https://vincerubinetti.bandcamp.com/album/the-music-of-3blue1brown">
        The Music of 3Blue1Brown
      </a>{" "}
      in various projects. This form helps me keep track of them and respond
      more quickly.
    </p>
    <p>
      Please take a moment to answer some questions.{" "}
      <i>It only takes a minute.</i>
    </p>

    <hr />

    <h2>I just want to listen to the music.</h2>
    <p>
      Then you don’t need this form! Just stream or download the music{" "}
      <a href="https://vincerubinetti.bandcamp.com/album/the-music-of-3blue1brown">
        on Bandcamp
      </a>{" "}
      or <a href="https://vincentrubinetti.com">elsewhere</a>. It’s free!
    </p>
  </Page>
);

export { Component };
