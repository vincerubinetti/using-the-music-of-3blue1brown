import type { ComponentProps } from "react";
import clsx from "clsx";
import styles from "./Background.module.css";

/** width/height of grid in minor cells */
const cells = 20;
/** every this many minor cells becomes major */
const major = 4;
/** size of cell in svg units */
const size = 50;

/** grid boundary from origin */
const bound = (cells * size) / 2;

/** grid visualization */
export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 opacity-10">
      <svg
        className={clsx("absolute top-1/2 w-full", styles.svg)}
        viewBox={`-${bound} -${bound} ${bound * 2} ${bound * 2}`}
      >
        <Minor />
        <Major />
      </svg>
    </div>
  );
}

/** grid line */
const Line = (props: ComponentProps<"line"> & { index: number }) => (
  <line
    {...props}
    className={clsx(props.className, styles.line)}
    pathLength={1}
    style={{
      animationDelay: 2 + props.index / 20 + "s",
    }}
  />
);

/** minor grid lines */
const Minor = () => {
  const from = -cells / 2;
  const to = cells / 2;
  const h = [];
  const v = [];

  for (let index = from; index <= to; index++) {
    h.push(
      <Line
        key={index}
        index={index}
        x1={index * size}
        x2={index * size}
        y1={-bound}
        y2={bound}
      />,
    );
    v.push(
      <Line
        key={index}
        index={index}
        x1={-bound}
        x2={bound}
        y1={index * size}
        y2={index * size}
      />,
    );
  }

  return (
    <g className="fill-none stroke-gray-500 stroke-1">
      <g>{h}</g>
      <g>{v}</g>
    </g>
  );
};

/** major grid lines */
const Major = () => {
  const from = -cells / major / 2;
  const to = cells / major / 2;
  const h = [];
  const v = [];

  for (let index = from; index <= to; index++) {
    h.push(
      <Line
        key={index}
        index={index}
        x1={major * index * size}
        x2={major * index * size}
        y1={-bound}
        y2={bound}
      />,
    );
    v.push(
      <Line
        key={index}
        index={index}
        x1={-bound}
        x2={bound}
        y1={major * index * size}
        y2={major * index * size}
      />,
    );
  }

  return (
    <g className="fill-none stroke-sky-500 stroke-2">
      <g>{h}</g>
      <g>{v}</g>
    </g>
  );
};
