import * as React from "react";
import type { SVGProps } from "react";
const SvgCloseBlue = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#537FE7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.818 12.182 6.364-6.364M12.182 12.182 5.818 5.818"
    />
  </svg>
);
export default SvgCloseBlue;
