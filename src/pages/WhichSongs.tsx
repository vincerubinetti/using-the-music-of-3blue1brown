import { useFormContext } from "react-hook-form";
import z from "zod";
import Checkbox from "@/components/Checkbox";
import Page from "@/components/Page";
import type { Schema } from "@/pages";

const songs = [
  "Zeta",
  "Heartbeat",
  "Sixes",
  "Euler's Clock",
  "The Wallis Ballade",
  "Stepwise",
  "Quaternions",
  "Reflections",
  "Resonance",
  "Serendipity",
  "Trinkets",
  "Hypothesis",
  "Wading",
  "Centroid",
  "Spirals",
  "Endpoint",
  "Fractals",
  "Occlusion",
  "Fives",
  "Transformation",
  "Clarity",
  "Focal Point",
  "Fragments",
  "Gnomon",
  "Orbit",
  "Far Away",
  "Quantum Blue",
  "Memoir",
  "Obsession",
  "Banquet",
  "Prison",
  "The Night Before",
] as const;

// which songs page
export const Component = () => {
  const { register } = useFormContext<Schema>();

  return (
    <Page title="Which songs do you want to use?">
      <div className="grid w-full auto-rows-fr grid-cols-[repeat(auto-fit,minmax(--spacing(46),1fr))] place-content-center gap-2">
        {songs.map((song, index) => (
          <Checkbox key={index} value={song} type="checkbox" {...register(key)}>
            {song}
          </Checkbox>
        ))}
      </div>
    </Page>
  );
};

export const key = "whichSongs";

export const defaultValue = [];

export const schema = z.array(z.enum(songs)).min(1, "Select at least one song");
