import { useFormContext } from "react-hook-form";
import z from "zod";
import Page from "@/components/Page";
import type { Schema } from "@/pages";

export const Component = () => {
  const { register } = useFormContext<Schema>();

  return (
    <Page title="Your full name" description="So I can properly address you">
      <input {...register(key)} placeholder="Your name" />
    </Page>
  );
};

export const key = "name";

export const defaultValue = "";

export const schema = z.string().min(1, "Please write your full name");
