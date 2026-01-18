import { useFormContext } from "react-hook-form";
import z from "zod";
import Page from "@/components/Page";
import type { Schema } from "@/pages";

export const Component = () => {
  const { register } = useFormContext<Schema>();

  return (
    <Page title="Your channel/user name">
      <input {...register(key)} placeholder="Your Name" />
    </Page>
  );
};

export const key = "channel";

export const defaultValue = "";

export const schema = z.string().min(2, "Please write your full channel name");
