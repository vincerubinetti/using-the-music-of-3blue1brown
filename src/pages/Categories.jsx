import { array } from "yup";
import { FieldArray, useFormikContext } from "formik";
import Page from "../components/Page";
import Checkbox from "../components/Checkbox";
import Grid from "../components/Grid";

// list of categories
const categories = [
  "For the Summer of Math Exposition (SoME)",
  "In a school project or thesis, as a student",
  "In a classroom lesson, as a teacher",
  "In an online video, on YouTube, Instagram, Skillshare, etc.",
  "In an internal production, as a company",
  "In an online advertisement or promo",
  "In a live performance or broadcast",
  "In film, TV, radio, podcasts, games, or apps",
  "Other",
];

// categories page
const Component = () => {
  const { values } = useFormikContext();
  const selected = values[key];

  return (
    <Page
      title="Which of these describe how you plan to use the music?"
      description="To help the form automatically categorize your use case. Select all that apply."
    >
      <Grid cols={1}>
        <FieldArray name={key}>
          {({ push, remove }) =>
            categories.map((song, index) => (
              <Checkbox
                key={index}
                label={song}
                id={"category_" + index}
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
    </Page>
  );
};

const key = "categories";

const initialValue = [];

const validation = array().min(1, "Select at least one category");

export { Component, key, initialValue, validation };
