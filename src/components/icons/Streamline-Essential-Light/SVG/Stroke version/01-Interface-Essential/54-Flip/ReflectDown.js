import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReflectDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".reflect-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="reflect-down_svg__a"
      d="M15.5 12.499H.5M14.793 2.206c.389-.389.257-.707-.293-.707h-12c-.55 0-.682.318-.293.707l5.586 5.586a1 1 0 001.414 0zM15.5 23.5h-13c-.55 0-.682-.318-.293-.707l5.586-5.586a1 1 0 011.414 0zM17.5 6a6 6 0 010 12"
    />,
    <path className="reflect-down_svg__a" d="M20.5 19.999l-3-2 2.5-3" />
  );

export default SvgReflectDown;
