import * as React from "react";
import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15.179}
    height={15.18}
    {...props}
  >
    <defs>
      <style>
        {
          ".close_svg__cls-1{fill:currentColor;stroke:transparent;stroke-miterlimit:10}"
        }
      </style>
    </defs>
    <g
      id="close_svg__Group_1607"
      data-name="Group 1607"
      transform="rotate(-45 .465 19.778)"
    >
      <path
        id="close_svg__Stroke_5"
        d="M14.983 0c1.1 0 1.988.559 1.988 1.248 0 .632-.748 1.154-1.719 1.236l-.27.011H1.988C.89 2.5 0 1.937 0 1.248 0 .616.748.094 1.719.011L1.988 0Z"
        className="close_svg__cls-1"
        data-name="Stroke 5"
        transform="translate(5.635 14.949)"
      />
      <path
        id="close_svg__Stroke_7"
        d="M1.248 0C1.88 0 2.4.748 2.484 1.719l.011.27v12.994c0 1.1-.559 1.988-1.248 1.988-.632 0-1.154-.748-1.236-1.719L0 14.983V1.988C0 .89.559 0 1.248 0Z"
        className="close_svg__cls-1"
        data-name="Stroke 7"
        transform="translate(12.873 7.712)"
      />
    </g>
  </svg>
);
export default SvgClose;
