import { array } from "yup";
import { FieldArray, useFormikContext } from "formik";
import Page from "../components/Page";
import Checkbox from "../components/Checkbox";
import Grid from "../components/Grid";

// list of songs
const songs = [
  "Zeta",
  "Heartbeat",
  "Sixes",
  "Euler's Clock",
  "The Wallis Ballade",
  "Stepwise",
  "Quaternions",
  "Reflections",
  "Resonance",
  "Serendipity",
  "Trinkets",
  "Hypothesis",
  "Wading",
  "Centroid",
  "Spirals",
  "Endpoint",
  "Fractals",
  "Occlusion",
  "Fives",
];

// which songs page
const Component = () => {
  const { values } = useFormikContext();
  const selected = values[key];

  return (
    <Page title="Which songs do you want to use?">
      <Grid>
        <FieldArray name={key}>
          {({ push, remove }) =>
            songs.map((song, index) => (
              <Checkbox
                key={index}
                label={song}
                id={"song_" + index}
                checked={selected.includes(song)}
                onChange={(checked) => {
                  if (checked) push(song);
                  else remove(selected.indexOf(song));
                }}
              />
            ))
          }
        </FieldArray>
      </Grid>

      <p>
        If you want to use music other than{" "}
        <a href="https://vincerubinetti.bandcamp.com/album/the-music-of-3blue1brown">
          The Music of 3Blue1Brown
        </a>
        , please contact me at{" "}
        <a href="mailto:vince@vincentrubinetti.com">
          vince@vincentrubinetti.com
        </a>
        .
      </p>
    </Page>
  );
};

const key = "whichSongs";

const initialValue = [];

const validation = array().min(1, "Select at least one song");

export { Component, key, initialValue, validation };
