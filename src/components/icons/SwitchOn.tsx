import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitchOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect width={24} height={24} fill="#F4F9FF" rx={12} />
  </svg>
);
export default SvgSwitchOn;
