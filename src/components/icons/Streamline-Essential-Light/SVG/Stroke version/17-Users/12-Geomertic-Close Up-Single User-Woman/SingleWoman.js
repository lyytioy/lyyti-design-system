import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-woman_svg__cls-1"
      d="M3 22.75a9 9 0 0118 0zM18.5 12.217a7.03 7.03 0 01-1.023-3.894V6.731a5.477 5.477 0 10-10.954 0v1.592A7.03 7.03 0 015.5 12.217"
    />,
    <path
      className="single-woman_svg__cls-1"
      d="M6.523 7.635A7.25 7.25 0 0012 5.124a7.25 7.25 0 005.477 2.511M16.828 7.606a4.833 4.833 0 01-9.656 0"
    />
  );

export default SvgSingleWoman;
