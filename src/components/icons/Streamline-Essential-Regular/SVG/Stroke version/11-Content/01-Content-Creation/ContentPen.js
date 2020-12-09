import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-pen_svg__a"
      d="M9.11 19.13a1.5 1.5 0 01-2.122 0l-2.121-2.122a1.5 1.5 0 010-2.121L18.125 1.629a3 3 0 014.243 4.242zM18.125 1.629a3 3 0 00-4.243 0L10.7 4.811M14.413 5.341l4.242 4.243"
    />,
    <path
      className="content-pen_svg__a"
      d="M5.941 18.082a2.315 2.315 0 01-.065 3.247C4.971 22.235.747 23.25.747 23.25s1.042-4.2 1.947-5.1a2.314 2.314 0 013.247-.068z"
    />
  );

export default SvgContentPen;
