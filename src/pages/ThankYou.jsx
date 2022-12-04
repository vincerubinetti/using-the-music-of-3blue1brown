import Page from "../components/Page";

// end thank you page
const Component = () => (
  <Page title="Thank you!">
    <p>
      You should receive an automated email explaining how you can use the
      music.
    </p>
    <p>
      If you don't receive an automated email, make sure it's not in your spam
      folder. If you have any questions, contact me at{" "}
      <a href="mailto:vince@vincentrubinetti.com">
        vince@
        <wbr />
        vincent
        <wbr />
        rubinetti.com
      </a>
      .
    </p>
  </Page>
);

export { Component };
