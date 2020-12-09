import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReflectUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".reflect-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="reflect-up_svg__a"
      d="M8.5 12.499h15M9.207 22.792c-.389.389-.257.707.293.707h12c.55 0 .682-.318.293-.707l-5.586-5.586a1 1 0 00-1.414 0zM9.207 2.206C8.818 1.817 8.95 1.5 9.5 1.5h12c.55 0 .682.318.293.707L15.5 8.5zM6.5 19a6 6 0 010-12"
    />,
    <path className="reflect-up_svg__a" d="M3.5 4.999l3 2-2.5 3" />
  );

export default SvgReflectUp;
