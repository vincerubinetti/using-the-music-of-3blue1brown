import { atom, getDefaultStore } from "jotai";
import z from "zod";
import * as Categories from "./Categories";
import * as Channel from "./Channel";
import * as Email from "./Email";
import * as Greeting from "./Greeting";
import * as Intro from "./Intro";
import * as Name from "./Name";
import * as SongsNote from "./SongsNote";
import * as Subscribers from "./Subscribers";
import * as ThankYou from "./ThankYou";
import * as UseCase from "./UseCase";
import * as WhichSongs from "./WhichSongs";

/** page order and full objects */
export const pages = [
  Greeting,
  Intro,
  Email,
  Name,
  SongsNote,
  WhichSongs,
  UseCase,
  Categories,
  Channel,
  Subscribers,
  ThankYou,
] as const;

/** form schema */
export const schema = () => {
  const followup = getDefaultStore().get(followupAtom);
  return z.object({
    [Email.key]: Email.schema,
    [Name.key]: Name.schema,
    [WhichSongs.key]: WhichSongs.schema,
    [UseCase.key]: UseCase.schema,
    [Categories.key]: Categories.schema,
    [Channel.key]: followup ? Channel.schema : z.undefined(),
    [Subscribers.key]: followup ? Subscribers.schema : z.undefined(),
  });
};

/** form schema type */
export type Schema = z.infer<ReturnType<typeof schema>>;

// https://github.com/orgs/react-hook-form/discussions/8516

/** current page number */
export const pageNumberAtom = atom(0);

/** go to next page */
export const nextPage = () =>
  getDefaultStore().set(pageNumberAtom, (page) => page + 1);
/** go to previous page */
export const previousPage = () =>
  getDefaultStore().set(pageNumberAtom, (page) => page - 1);
export const lastPage = () =>
  getDefaultStore().set(pageNumberAtom, pages.length - 1);

/** should followup questions be shown */
export const followupAtom = atom(false);

/** update followup questions based on response in categories question */
export const updateFollowup = (categories: Schema["categories"]) => {
  const followup = !!categories.find(
    (category) => category.includes("video") || category.includes("SoME"),
  );
  getDefaultStore().set(followupAtom, followup);
};
