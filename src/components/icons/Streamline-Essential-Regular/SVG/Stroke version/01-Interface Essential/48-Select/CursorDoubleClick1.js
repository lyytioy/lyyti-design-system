import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorDoubleClick1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-double-click-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-double-click-1_svg__a"
      d="M13.338 16.964a4.5 4.5 0 11-5.838-6.61M18.75 14.247a9 9 0 11-9-9M11.224 12.567L23.25.747"
    />,
    <path className="cursor-double-click-1_svg__a" d="M11.224 8.067v4.5h4.5" />
  );

export default SvgCursorDoubleClick1;
