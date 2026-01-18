import type { ReactNode } from "react";

type Props = {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
};

/** page layout */
export default function Page({ title, description, children }: Props) {
  return (
    <>
      {title && <h1>{title}</h1>}
      {description && typeof description === "string" ? (
        <p>{description}</p>
      ) : (
        description
      )}
      {children}
    </>
  );
}
