import log from "./debug";
import packageJson from "../../package.json";

// local storage key
const key = "using-the-music-of-3blue1brown-" + packageJson.version;

log("Storage key", key);

// load form state from storage
export const load = () => {
  try {
    const state = JSON.parse(window.localStorage[key]);
    log("Form state loaded", state);
    return state;
  } catch (error) {
    log("Couldn't load form state");
    return {};
  }
};

// save form state to storage
export const save = (values) => {
  try {
    window.localStorage[key] = JSON.stringify(values);
    log("Form state saved", values);
  } catch (error) {
    log("Couldn't save form state");
  }
};
