import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileStack = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-stack_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-stack_svg__a"
      d="M8 1h9.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V18a1 1 0 01-1 1H8a1 1 0 01-1-1V2a1 1 0 011-1z"
    />,
    <path className="common-file-stack_svg__a" d="M18 21H6a1 1 0 01-1-1V4" />,
    <path className="common-file-stack_svg__a" d="M16 23H4a1 1 0 01-1-1V6" />
  );

export default SvgCommonFileStack;
