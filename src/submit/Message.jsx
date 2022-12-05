import { Fragment } from "react";
import { pages } from "../pages";

// component to generate html email response
const Response = ({ level, values }) => (
  <>
    <Greeting {...values} />
    {level === 1 && <Requirements1 />}
    {level === 2 && <Requirements2 />}
    {level === 3 && <Requirements3 />}
    {level === 2 && <Faqs />}
    <Answers {...values} />
    <ThankYou />
  </>
);

export default Response;

// greeting section of email
const Greeting = ({ name }) => (
  <>
    <b>Hi {name}</b>
    <br />
    <br />
    Thank you for answering how you want to use the music of 3Blue1Brown. For
    your use case, here’s what you need to do to use the music.
    <br />
    <br />
  </>
);

// requirements (level 1) section of email
const Requirements1 = () => (
  <>
    <b>——— Requirements ———</b>
    <br />
    <br />
    In a visible spot such as the video description, put the following:
    <br />
    <br />
    Music by Vincent Rubinetti
    <br />
    Download the music on Bandcamp:
    <br />
    https://vincerubinetti.bandcamp.com/album/the-music-of-3blue1brown
    <br />
    Stream the music on Spotify:
    <br />
    https://open.spotify.com/playlist/3zNK20qC96mVSww60lVi1k
    <br />
    <br />
    If you have any questions, reply to this message. If your use case ever
    changes in the future, please contact me again.
    <br />
    <br />
  </>
);

// requirements (level 2) section of email
const Requirements2 = () => (
  <>
    <b>——— Requirements ———</b>
    <br />
    <br />
    $50 USD <i>per song</i>, for one use
    <br />
    $100 USD <i>per song</i>, for unlimited uses
    <br />
    <br />
    <a href="https://www.paypal.me/VincentRubinetti">Send with PayPal</a> or
    reply to arrange a different method.
    <br />
    <br />
    If you have any questions, reply to this message. If your use case ever
    changes in the future, please contact me again.
    <br />
    <br />
  </>
);

// requirements (level 3) section of email
const Requirements3 = () => (
  <>
    <b>——— Requirements ———</b>
    <br />
    <br />
    For your use case, I couldn’t automatically determine the requirements. I’ll
    have to personally take a look at your answers. If I don’t get back to you
    within a couple of days, feel free to send me another email.
    <br />
    <br />
  </>
);

// FAQ's section of email
const Faqs = () => (
  <>
    <b>——— FAQ’s ———</b>
    <br />
    <br />
    <b>Why all the requirements?</b>
    <br />
    <br />
    Licensing fees are part of how many composers, including myself, make their
    living. My agreement with Grant assumes that other people will occasionally
    license the music and thus cover some of the cost of making it. I also want
    to limit how much the music is used outside of 3Blue1Brown to keep it unique
    and distinguishable to the channel.
    <br />
    <br />
    <b>I bought the music on Bandcamp. Why can’t I just use it?</b>
    <br />
    <br />
    For the same reason that buying a Taylor Swift song on iTunes doesn’t let
    you use it in a YouTube video. When you buy music or a music streaming
    subscription, you get the right to listen to it for personal enjoyment; you
    don’t get to use it in any kind of public production. I sincerely appreciate
    everyone who pays for the album on Bandcamp. I make it free for the benefit
    of students – who have more important matters on their hands – and for
    people who just want to listen to it casually. If you purchased the music
    and want a refund, I’d be happy to work with the Bandcamp staff to get you
    one.
    <br />
    <br />
    <b>What if I can’t afford the fees?</b>
    <br />
    <br />
    I try to make my licensing options as lenient as possible, especially for
    smaller creators who are just starting out. My intent is that if you fall
    under a category that has a fee, you’re in a situation where you can afford
    it. You can take a look at what typical fees are on popular stock music
    sites like Premium Beat, The Music Case, and Hook Sounds. There is also a
    wealth of free, Creative Commons-licensed music of all genres and styles
    available on the Internet. I’m happy to make specific recommendations if you
    need them.
    <br />
    <br />
  </>
);

// convert camelCase to Title Case
const toTitleCase = (string) =>
  string
    .replace(/([A-Z])/g, " $1")
    .split(/\s/)
    .filter((word) => word)
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");

// answers section of email
const Answers = (values) => {
  // get list of user's answers
  const answers = pages
    // get pages that are actual questions
    .filter(({ validation }) => validation)
    // convert to question (from page key) and answer (from formik values)
    .map(({ key }) => ({
      question: toTitleCase(key),
      answer: [values[key]].flat().join("\n"),
    }))
    // remove blank answers
    .filter(({ answer }) => answer);

  return (
    <>
      <b>——— Your Answers ———</b>
      <br />
      <br />
      {answers.map(({ question, answer }, index) => (
        <Fragment key={index}>
          <b>{question}</b>
          <br />
          {answer}
          <br />
          <br />
        </Fragment>
      ))}
    </>
  );
};

// thank you section of email
const ThankYou = () => (
  <>
    <b>——— Thank You ———</b>
    <br />
    <br />
    I appreciate your interest in this music written for Grant’s wonderful
    channel.
    <br />
    <br />
    <b>Vincent Rubinetti</b>
    <br />
    Composer, producer, and more
    <br />
    <a href="https://vincentrubinetti.com/">vincentrubinetti.com</a>
    <br />
    <br />
  </>
);
