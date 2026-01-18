import { useFormContext } from "react-hook-form";
import z from "zod";
import Page from "@/components/Page";
import type { Schema } from "@/pages";

export const Component = () => {
  const { register } = useFormContext<Schema>();

  return (
    <Page
      title="Your email address"
      description="The form will send an automatic response to this address when you're done"
    >
      <input {...register(key)} placeholder="Email" />
    </Page>
  );
};

export const key = "email";

export const defaultValue = "";

export const schema = z.email("Invalid email");
