import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHandDrag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hand-drag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hand-drag_svg__a"
      d="M7.5 15.5v-9a1.5 1.5 0 013 0v5M10.5 6.5v-1a1.5 1.5 0 013 0v1M13.5 11.5v-5a1.5 1.5 0 013 0v2"
    />,
    <path
      className="hand-drag_svg__a"
      d="M16.5 12.5v-4a1.5 1.5 0 013 0v9a5 5 0 01-5 5h-3.335c-3.665 0-6.665-4-6.665-6v-4A1.5 1.5 0 016 11h1.5"
    />
  );

export default SvgHandDrag;
