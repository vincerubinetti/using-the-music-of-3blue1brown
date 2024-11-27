import { FieldArray, useFormikContext } from "formik";
import { array } from "yup";
import Checkbox from "../components/Checkbox";
import Grid from "../components/Grid";
import Page from "../components/Page";

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
  "Transformation",
  "Clarity",
  "Memoir",
  "Obsession",
  "Banquet",
  "Prison",
  "The Night Before",
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
        If the song you want to use isn't listed above, please contact me at{" "}
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
