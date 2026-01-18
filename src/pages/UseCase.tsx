import { useFormContext } from "react-hook-form";
import z from "zod";
import Page from "@/components/Page";
import type { Schema } from "@/pages";

export const Component = () => {
  const { register } = useFormContext<Schema>();
  return (
    <Page
      title="Describe in detail HOW you plan to use the music"
      description={
        <>
          <p>
            Tell me as much as you can about your project. <b>FOR EXAMPLE:</b>{" "}
            Where will it be uploaded? Who will see it? Is it monetized? Are you
            a new creator? Is it for education? What are the topics?
          </p>
        </>
      }
    >
      <textarea
        {...register(key)}
        className="w-full"
        placeholder="Describe your use case"
      />
    </Page>
  );
};

export const key = "useCase";

export const defaultValue = "";

export const schema = z
  .string()
  .min(120, "Please write at least a few sentences, this is important to me");
