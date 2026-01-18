import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useAtomValue } from "jotai";
import { ArrowLeft, ArrowRight, LoaderCircle, Send } from "lucide-react";
import {
  followupAtom,
  nextPage,
  pageNumberAtom,
  pages,
  previousPage,
} from "@/pages";
import type { Schema } from "@/pages";

/** form navigation controls */
export default function Nav() {
  const { formState, getFieldState, trigger, watch } = useFormContext<Schema>();

  /** trigger revalidation on any re-render */
  useEffect(() => {
    trigger();
  }, [trigger]);

  /** full state */
  console.debug(watch());

  /** current page number */
  const pageNumber = useAtomValue(pageNumberAtom);
  /** current page details */
  const page = pages[pageNumber];
  /** current page key */
  const key = page && "key" in page ? page.key : null;
  /** current page errors */
  const error = key ? formState.errors[key] : null;
  /** current page field state */
  const state = key ? getFieldState(key) : null;

  /** current followup state */
  const followup = useAtomValue(followupAtom);
  /** page number of submit page */
  const submitPage = followup ? pages.length - 2 : pages.length - 4;

  /** are we on submit page (page before last page) */
  const onSubmitPage = pageNumber === submitPage;
  /** are we on first page */
  const onFirstPage = pageNumber <= 0;
  /** are we on very last page */
  const onLastPage = pageNumber >= pages.length - 1;

  /** can go to previous page */
  const canPrev = !onFirstPage && !onLastPage && !formState.isSubmitting;
  /** can go to next page */
  const canNext = !state?.invalid && !onLastPage && !formState.isSubmitting;

  /** percent complete */
  const progress = pageNumber / submitPage;

  return (
    <footer>
      <div
        className="absolute top-0 left-0 h-0.5 w-full bg-sky-500 transition-[clip-path]"
        style={{ clipPath: `inset(0 ${(1 - progress) * 100}% 0 0)` }}
      />

      {error && state?.isDirty && (
        <p className="text-red-300" role="alert">
          {String(error.message)}
        </p>
      )}

      <div className="flex flex-wrap gap-4">
        {!onFirstPage && !onLastPage && (
          <button
            type="button"
            aria-disabled={!canPrev}
            onClick={() => {
              if (canPrev) previousPage();
            }}
          >
            <ArrowLeft />
            Previous
          </button>
        )}
        {!onLastPage && (
          <button
            type={onSubmitPage ? "submit" : "button"}
            aria-disabled={!canNext}
            onClick={(event) => {
              if (!onSubmitPage && canNext) {
                nextPage();
                event.preventDefault();
              }
            }}
          >
            {onFirstPage ? (
              <>
                Start
                <ArrowRight />
              </>
            ) : onSubmitPage ? (
              formState.isSubmitting ? (
                <>
                  Submitting
                  <LoaderCircle className="animate-spin" />
                </>
              ) : (
                <>
                  Submit
                  <Send />
                </>
              )
            ) : (
              <>
                Next
                <ArrowRight />
              </>
            )}
          </button>
        )}
      </div>

      <a
        className="absolute right-2 bottom-2"
        href="mailto:vince@vincentrubinetti.com"
      >
        Help
      </a>
    </footer>
  );
}
