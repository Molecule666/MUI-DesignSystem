import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckedIndeterminate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={40}
    fill="none"
    viewBox="0 0 40 41"
    {...props}
  >
    <rect width={42} height={42} x={-1} fill="#537FE7" rx={0} />
    <rect width={20} height={4} x={10} y={19} fill="#fff" rx={1} />
  </svg>
);
export default SvgCheckedIndeterminate;
