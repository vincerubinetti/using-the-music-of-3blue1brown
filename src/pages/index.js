import { object } from "yup";
import * as Greeting from "./Greeting";
import * as Email from "./Email";
import * as Name from "./Name";
import * as SongsNote from "./SongsNote";
import * as WhichSongs from "./WhichSongs";
import * as UseCase from "./UseCase";
import * as Categories from "./Categories";
import * as Channel from "./Channel";
import * as Subscribers from "./Subscribers";
import * as ThankYou from "./ThankYou";

// ordered array of pages with their props
export const pages = [
  Greeting,
  Email,
  Name,
  SongsNote,
  WhichSongs,
  UseCase,
  Categories,
  Channel,
  Subscribers,
  ThankYou,
];

// make hash map of initial values from each page for formik
export const initialValues = {};
for (const { key, initialValue } of pages)
  if (initialValue !== undefined) initialValues[key] = initialValue;

// make hash map of validation schemas from each page for formik
const schema = {};
for (const { key, validation } of pages)
  if (validation !== undefined) schema[key] = validation;
export const validationSchema = object().shape(schema);

// if on last question to answer
export const isLast = (page, values) => {
  if (values.categories.find((cat) => cat.includes("video"))) return page === 8;
  else return page === 6;
};
