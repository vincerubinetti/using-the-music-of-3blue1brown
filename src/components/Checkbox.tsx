import type { ComponentPropsWithRef } from "react";
import { Check } from "lucide-react";

/** check or radio */
export default function Checkbox({
  children,
  ...props
}: ComponentPropsWithRef<"input">) {
  return (
    <label className="flex cursor-pointer items-center justify-start gap-4 pr-2 text-left leading-loose accent-sky-500 transition-colors hover:bg-gray-800">
      <div className="relative grid place-content-center bg-gray-800 p-2">
        <input {...props} className="peer absolute inset-0 appearance-none" />
        <Check className="opacity-0 transition-opacity peer-checked:opacity-100" />
      </div>
      {children}
    </label>
  );
}
