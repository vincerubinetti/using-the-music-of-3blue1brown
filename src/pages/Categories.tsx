import { useFormContext } from "react-hook-form";
import z from "zod";
import Checkbox from "@/components/Checkbox";
import Page from "@/components/Page";
import type { Schema } from "@/pages";

const categories = [
  "For the Summer of Math Exposition (SoME)",
  "In a school project or thesis, as a student",
  "In a classroom lesson, as a teacher",
  "In an online video, on YouTube, Instagram, Skillshare, etc.",
  "In an internal production, as a company",
  "In an online advertisement or promo",
  "In a live performance or broadcast",
  "In film, TV, radio, podcasts, games, or apps",
  "Other",
] as const;

export const Component = () => {
  const { register } = useFormContext<Schema>();

  return (
    <Page
      title="Which of these describe how you plan to use the music?"
      description="To help the form automatically categorize your use case. Select all that apply."
    >
      <div className="grid gap-2">
        {categories.map((category, index) => (
          <Checkbox
            key={index}
            value={category}
            type="checkbox"
            {...register(key)}
          >
            {category}
          </Checkbox>
        ))}
      </div>
    </Page>
  );
};

export const key = "categories";

export const schema = z
  .array(z.enum(categories))
  .min(1, "Select at least one category");

export const defaultValue = [];
