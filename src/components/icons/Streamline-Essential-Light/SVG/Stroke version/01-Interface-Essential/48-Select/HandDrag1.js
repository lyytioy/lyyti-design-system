import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHandDrag1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hand-drag-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hand-drag-1_svg__a"
      d="M7.5 12.5V9a1.5 1.5 0 013 0v1M13.5 10V9a1.5 1.5 0 013 0v1M13.5 9V8a1.5 1.5 0 00-3 0v1"
    />,
    <path
      className="hand-drag-1_svg__a"
      d="M16.5 11.5V10a1.5 1.5 0 113 0v5.5a5 5 0 01-5 5h-3.335c-5.665 0-6.665-5-6.665-7v-1c0-.972.5-2 1.5-2h1.5"
    />
  );

export default SvgHandDrag1;
