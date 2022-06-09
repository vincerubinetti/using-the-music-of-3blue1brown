import { renderToString } from "react-dom/server";
import Message from "./Message";

// form submission logic
export const submit = async (values) => {
  // determine "level" of use
  const level = getLevel(values);

  // render html string to be put in body of response email
  const message = renderToString(<Message level={level} values={values} />);

  // send email
  return sendEmail({ ...values, level, message });
};

// determine "level" of use based on form answers
export const getLevel = ({ categories, subscribers }) => {
  const evaluateCategory = (category) => {
    if (category.includes("SoME")) return 1;
    if (category.includes("student")) return 1;
    if (category.includes("teacher")) return 1;
    if (category.includes("video")) {
      if (subscribers.includes("<")) return 1;
      if (subscribers.includes("to")) return 2;
      return 4;
    }
    if (category.includes("company")) return 3;
    if (category.includes("online")) return 3;
    if (category.includes("live")) return 4;
    if (category.includes("film")) return 4;
    if (category.includes("other")) return 4;
    return 4;
  };

  // return highest (most restrictive) level category that user checked
  return Math.max(...categories.map(evaluateCategory));
};

// send email
export const sendEmail = async ({ name, email, level, message }) => {
  // request url (email sending php utility)
  const emailSender = "https://vincentrubinetti.com/email.php";

  // request body params
  const body = {
    fromAddress: "vince@vincentrubinetti.com",
    fromName: "Vincent Rubinetti",
    ccAddress: "vince@vincentrubinetti.com",
    ccName: "Vincent Rubinetti",
    toAddress: email,
    toName: name,
    subject: `Using the music of 3Blue1Brown ${"-".repeat(level)} ${name}`,
    html: message,
    plain: htmlToPlain(message),
  };

  // request options
  const options = {
    method: "POST",
    body: JSON.stringify(body),
  };

  try {
    // fake success when testing locally
    if (process.env.NODE_ENV === "development") return true;

    // make request
    const response = await (await fetch(emailSender, options)).text();

    // debug
    console.groupCollapsed("Email response");
    console.log(response);
    console.groupEnd();

    // return success based on whether php returns string with "success"
    return response.includes("success");
  } catch (error) {
    console.log(error);
    return false;
  }
};

// convert html email string to decent-looking plain text email string
export const htmlToPlain = (string) =>
  string.replace(/<br\s*\/>/g, "\n").replace(/<[^>]*>/g, "");
