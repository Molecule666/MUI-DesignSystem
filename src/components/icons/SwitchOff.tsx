import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitchOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <rect width={16} height={16} fill="#979EA8" rx={8} />
  </svg>
);
export default SvgSwitchOff;
