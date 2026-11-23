import type { Schema } from "@/pages";
import { useFormContext } from "react-hook-form";
import z from "zod";
import Page from "@/components/Page";

export const Component = () => {
  const { register } = useFormContext<Schema>();

  return (
    <Page
      title="Your email address"
      description="The form will send an automatic response to this address when you're done"
    >
      <input
        {...register(key)}
        placeholder="Email"
        className="self-stretch text-center"
      />
    </Page>
  );
};

export const key = "email";

export const defaultValue = "";

export const schema = z.email("Please enter a valid email");

export const className = "width-sm";
