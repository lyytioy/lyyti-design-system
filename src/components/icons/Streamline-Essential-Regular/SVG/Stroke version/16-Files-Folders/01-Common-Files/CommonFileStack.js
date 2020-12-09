import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileStack = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-stack_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-stack_svg__a"
      d="M17.25 23.25H3.75a1.5 1.5 0 01-1.5-1.5V5.25"
    />,
    <path
      className="common-file-stack_svg__a"
      d="M20.25 20.25H6.75a1.5 1.5 0 01-1.5-1.5V2.25"
    />,
    <path
      className="common-file-stack_svg__a"
      d="M21.75 15.75a1.5 1.5 0 01-1.5 1.5H9.75a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h7.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06z"
    />
  );

export default SvgCommonFileStack;
