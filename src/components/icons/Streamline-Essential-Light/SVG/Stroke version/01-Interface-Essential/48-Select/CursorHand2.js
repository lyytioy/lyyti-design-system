import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorHand2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-hand-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cursor-hand-2_svg__a"
      d="M11.5 5.5v-2a1.5 1.5 0 113 0v2M14.5 11.5v-6a1.5 1.5 0 013 0v3"
    />,
    <path
      className="cursor-hand-2_svg__a"
      d="M17.5 13V8.5a1.5 1.5 0 013 0v10a5 5 0 01-5 5h-3.335a5.007 5.007 0 01-4.223-2.321C6.22 18.467 4.083 14 4.083 14a1.2 1.2 0 011.761-1.6L8.5 15.5v-10a1.5 1.5 0 013 0v6"
    />
  );

export default SvgCursorHand2;
