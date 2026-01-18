import { useFormContext } from "react-hook-form";
import z from "zod";
import Checkbox from "@/components/Checkbox";
import Page from "@/components/Page";

const a = (100000).toLocaleString(undefined, { notation: "compact" });
const b = (500000).toLocaleString(undefined, { notation: "compact" });
const brackets = [`< ${a}`, `${a} to ${b}`, `> ${b}`];

export const Component = () => {
  const { register } = useFormContext();

  return (
    <Page
      title={
        <>
          How many subscribers/
          <wbr />
          followers/
          <wbr />
          viewers do you have?
        </>
      }
    >
      <div className="grid gap-2">
        {brackets.map((bracket, index) => (
          <Checkbox key={index} value={bracket} type="radio" {...register(key)}>
            {bracket}
          </Checkbox>
        ))}
      </div>
    </Page>
  );
};

export const key = "subscribers";

export const initialValue = "";

export const schema = z.enum(brackets);
