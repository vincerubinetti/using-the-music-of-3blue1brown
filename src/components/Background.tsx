import { Fragment } from "react";
import clsx from "clsx";
import { range } from "lodash";
import styles from "./Background.module.css";

/** number of cells */
const cells = 16;
/** every this many minor cells becomes major */
const major = 4;
/** size of cells in svg units */
const size = 100;

/** grid edge from origin */
const radius = (cells * size) / 2;

const lines = range(-cells * size, cells * size + 1, size);

/** grid visualization */
export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-15">
      <svg
        className={clsx("absolute top-1/2 w-full", styles.svg)}
        viewBox={[-radius, -radius, radius * 2, radius * 2].join(" ")}
      >
        {lines.map((line, lineIndex) => (
          <Fragment key={lineIndex}>
            {(
              [
                ["x1", "x2", "y1", "y2"],
                ["y1", "y2", "x1", "x2"],
              ] as const
            ).map(([x1, x2, y1, y2], directionIndex) => (
              <line
                key={directionIndex}
                {...{
                  [x1]: -radius,
                  [x2]: radius,
                  [y1]: line,
                  [y2]: line,
                }}
                className={clsx(
                  "fill-none [stroke-dasharray:1]",
                  lineIndex % major === 0
                    ? "stroke-sky-500 stroke-2"
                    : "stroke-gray-500 stroke-1",
                  styles.line,
                )}
                pathLength={1}
                style={{ animationDelay: lineIndex / 5 + "s" }}
              />
            ))}
          </Fragment>
        ))}
      </svg>
    </div>
  );
}
