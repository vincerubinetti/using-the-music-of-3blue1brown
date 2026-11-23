import Page from "@/components/Page";

export const Component = () => {
  return (
    <Page title="Note">
      <p>
        Unfortunately, the following songs are <b>NOT</b> available to use:
      </p>
      <ol>
        <li>One, Two, Zeta</li>
        <li>Basis (formerly Grant’s Etude)</li>
        <li>Basis Vector (formerly Grant’s New Etude)</li>
        <li>Nudges (formerly Grant’s Opus)</li>
      </ol>
      <p>
        because I am not the sole composer of them and can’t give out permission
        on my own. If you really need to use them, contact{" "}
        <a href="https://soundcloud.com/drschroeder">Nathaniel Schroeder</a> for
        1, or <a href="https://www.3blue1brown.com/faq">Grant Sanderson</a> for
        2 &ndash; 4.
      </p>
    </Page>
  );
};
