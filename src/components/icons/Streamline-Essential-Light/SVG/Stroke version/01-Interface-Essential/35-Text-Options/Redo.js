import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRedo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".redo_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="redo_svg__a" d="M22.5.498v7h-7" />,
    <path
      className="redo_svg__a"
      d="M22.5 7.5A11.656 11.656 0 006.321 4.853a11.508 11.508 0 00-.11 18.647"
    />
  );

export default SvgRedo;
