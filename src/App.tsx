import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useAtomValue } from "jotai";
import { debounce } from "lodash";
import Background from "@/components/Background";
import Nav from "@/Nav";
import {
  followupAtom,
  lastPage,
  pageNumberAtom,
  pages,
  schema,
  updateFollowup,
} from "@/pages";
import type { Schema } from "@/pages";
import { submit } from "@/submit/submit";

export default function App() {
  /** react-hook-form controller */
  const methods = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema(useAtomValue(followupAtom))),
    defaultValues: Object.fromEntries(
      pages
        .filter((page) => "key" in page && "defaultValue" in page)
        .map((page) => [page.key, page.defaultValue]),
    ),
  });

  useFormPersist(methods);

  /** update followup questions based on response in categories question */
  // eslint-disable-next-line react-hooks/incompatible-library
  const categories = methods.watch("categories");
  useEffect(() => {
    updateFollowup(categories);
  }, [categories]);

  /** form submission */
  const onSubmit = async (data: Schema) => {
    if (await submit(data)) {
      /** success */
      lastPage();
    } else
      /** error */
      alert(
        "Sorry, there was an issue sending your email. Please try again or contact me directly at vince@vincentrubinetti.com",
      );
  };

  /** current page number */
  const pageNumber = useAtomValue(pageNumberAtom);
  /** current page details */
  const page = pages[pageNumber];

  return (
    <>
      <Background />
      <FormProvider {...methods}>
        <form className="contents" onSubmit={methods.handleSubmit(onSubmit)}>
          <main
            className={clsx(
              methods.formState.isSubmitting &&
                "pointer-events-none opacity-50 grayscale",
            )}
          >
            {page?.Component && <page.Component />}
          </main>
          <Nav />
        </form>
      </FormProvider>
    </>
  );
}

const storageKey = "3b1b-music-form";

/** sync react-hook-form with local storage */
const useFormPersist = ({
  watch,
  reset,
}: ReturnType<typeof useForm<Schema>>) => {
  /** load */
  useEffect(() => {
    try {
      const data = localStorage.getItem(storageKey);
      if (!data) return;
      const parsed = JSON.parse(data);
      reset(parsed);
    } catch (error) {
      console.error("Failed to load form data");
      console.error(error);
    }
  }, [reset]);

  /** save */
  useEffect(() => {
    const subscription = watch((data) => save(data));
    return () => subscription.unsubscribe();
  }, [watch]);
};

/** save */
const save = debounce((data: unknown) => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save form data");
    console.error(error);
  }
}, 300);
