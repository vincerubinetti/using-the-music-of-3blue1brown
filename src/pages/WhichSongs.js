import { array } from "yup";
import { FieldArray, useFormikContext } from "formik";
import Page from "../components/Page";
import Checkbox from "../components/Checkbox";

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
];

// which songs page
const Component = () => {
  const { values } = useFormikContext();
  const selected = values[key];

  return (
    <Page title="Which songs do you want to use?">
      <div className="check_grid">
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
      </div>
    </Page>
  );
};

const key = "whichSongs";

const initialValue = [];

const validation = array().min(1, "Select at least one song");

export { Component, key, initialValue, validation };
