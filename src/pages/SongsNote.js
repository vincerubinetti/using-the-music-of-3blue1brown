import Page from "../components/Page";

// note about songs page
const Component = () => (
  <Page title="Note">
    <p>
      Unfortunately, the following songs are <b>NOT</b> available to use:
    </p>
    <ol>
      <li>One, Two, Zeta</li>
      <li>Grant's Etude</li>
      <li>Grant's New Etude</li>
      <li>Grant's Opus</li>
    </ol>
    <p>
      because I am not the sole composer of them and can't give out permission
      on my own.
    </p>
    <p>
      If you really need to use them, contact{" "}
      <a href="https://soundcloud.com/drschroeder">Nathaniel Schroeder</a> for
      1, or <a href="https://www.3blue1brown.com/faq">Grant Sanderson</a> for 2
      &ndash; 4.
    </p>
    <p>
      If you're looking to use music not in the{" "}
      <a href="https://vincerubinetti.bandcamp.com/album/the-music-of-3blue1brown">
        3Blue1Brown album
      </a>
      , please contact me at{" "}
      <a href="mailto:vince@vincentrubinetti.com">vince@vincentrubinetti.com</a>
      .
    </p>
  </Page>
);

export { Component };
