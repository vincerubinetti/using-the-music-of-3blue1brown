import { renderToString } from "react-dom/server";
import type { Schema } from "@/pages";
import Response from "./Response";

/** submit form */
export const submit = async (data: Schema) => {
  /** determine "level" of use */
  const level = getLevel(data);

  /** render html string to be put in body of response email */
  const message = renderToString(Response({ level, data }));

  console.debug({ html: message, plain: htmlToPlain(message) });

  return sendEmail({ ...data, level, message });
};

// determine "level" of use based on form answers
export const getLevel = ({ categories, subscribers }: Schema) => {
  const evaluateCategory = (category: Schema["categories"][number]) => {
    if (category.includes("SoME")) return 1;
    if (category.includes("student")) return 1;
    if (category.includes("teacher")) return 1;
    if (category.includes("video")) {
      if (subscribers.includes("<")) return 1;
      if (subscribers.includes("to")) return 2;
      return 3;
    }
    if (category.includes("company")) return 2;
    if (category.includes("online")) return 2;
    if (category.includes("live")) return 3;
    if (category.includes("film")) return 3;
    if (category.includes("other")) return 3;
    return 3;
  };

  /** return highest (most restrictive) level category that user checked */
  return Math.max(...categories.map(evaluateCategory));
};

/** send response as email */
export const sendEmail = async ({
  name,
  email,
  level,
  message,
}: {
  name: string;
  email: string;
  level: number;
  message: string;
}) => {
  /** request url (email sending php utility) */
  const emailSender = "https://vincentrubinetti.com/email.php";

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

  const options = {
    method: "POST",
    body: JSON.stringify(body),
  };

  try {
    /** fake success when testing locally */
    if (import.meta.env.MODE === "development") return true;

    /** make request */
    const response = await (await fetch(emailSender, options)).text();

    console.debug("Email response", response);

    /** return success based on whether php returns string with "success" */
    return response.includes("success");
  } catch (error) {
    console.error(error);
    return false;
  }
};

/** convert html email string to decent-looking plain text email string */
export const htmlToPlain = (string: string) =>
  string.replace(/<br\s*\/>/g, "\n").replace(/<[^>]*>/g, "");
