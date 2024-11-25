import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M5.158 8.781a.75.75 0 0 1 1.06 0l4.94 4.94c.29.29.77.29 1.06 0l4.94-4.94a.75.75 0 0 1 1.06 1.06l-4.939 4.94a2.254 2.254 0 0 1-3.181 0l-4.94-4.94a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgArrowDown;
