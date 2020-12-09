import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorChoose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-choose_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-choose_svg__a"
      d="M6 23.249l-1.9-3.326a2.263 2.263 0 013.848-2.378l1.8 2.7V9a2.25 2.25 0 114.5 0v8.25h3.379a4.332 4.332 0 014.123 4.35v1.653M18 .749l5.25 5.25M18 5.999l5.25-5.25M7.5.749l-3.75 5.25-3-3"
    />
  );

export default SvgCursorChoose;
