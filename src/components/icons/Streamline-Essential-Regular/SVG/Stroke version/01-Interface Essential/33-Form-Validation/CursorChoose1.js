import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorChoose1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-choose-1_svg__b{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px;stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path
      d="M11.711 18.71l-5.1-5.1a2.277 2.277 0 113.221-3.22l3.245 3.244 6.076-8.1a2.277 2.277 0 013.643 2.733l-7.652 10.2a2.276 2.276 0 01-3.433.243z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />,
    <path
      className="cursor-choose-1_svg__b"
      d="M11.705 8.537l2.253-3.006a2.28 2.28 0 012.449-.823M8.891 19.246a2.277 2.277 0 01-2.373-.536l-5.1-5.1a2.277 2.277 0 012.364-3.76"
    />
  );

export default SvgCursorChoose1;
