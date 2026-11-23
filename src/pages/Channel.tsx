import type { Schema } from "@/pages";
import { useFormContext } from "react-hook-form";
import z from "zod";
import Page from "@/components/Page";

export const Component = () => {
  const { register } = useFormContext<Schema>();

  return (
    <Page title="Your channel/user name">
      <input
        {...register(key)}
        placeholder="Your channel/user name"
        className="self-stretch text-center"
      />
    </Page>
  );
};

export const key = "channel";

export const defaultValue = "";

export const schema = z.string().min(2, "Please write your full channel name");

export const className = "width-sm";
