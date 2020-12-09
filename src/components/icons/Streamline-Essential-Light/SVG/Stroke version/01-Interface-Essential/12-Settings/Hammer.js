import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHammer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hammer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hammer_svg__a"
      d="M16 1.5c-2.263 1.341-4.29.71-6-1L7.5 3l11 11 5-5z"
    />,
    <path
      className="hammer_svg__a"
      d="M3.914 22.914a2 2 0 01-2.828-2.828L12.838 8.333l2.828 2.829z"
    />
  );

export default SvgHammer;
