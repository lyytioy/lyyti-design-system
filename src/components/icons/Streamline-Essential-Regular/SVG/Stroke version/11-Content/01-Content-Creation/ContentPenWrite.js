import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPenWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pen-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-pen-write_svg__a"
      d="M22.588 4.591a2.25 2.25 0 00-3.182-3.182L8.14 12.675l3.182 3.182z"
    />,
    <path
      className="content-pen-write_svg__a"
      d="M8.14 12.675L6.747 17.25l4.575-1.393M18.281 2.534l3.182 3.182M3.747 18.75H3a2.25 2.25 0 000 4.5h15.75"
    />
  );

export default SvgContentPenWrite;
