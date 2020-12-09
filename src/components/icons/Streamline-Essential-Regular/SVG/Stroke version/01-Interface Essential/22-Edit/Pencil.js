import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPencil = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pencil_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="pencil_svg__a"
      d="M22.19 1.81a3.639 3.639 0 00-5.17.035l-14.5 14.5L.75 23.25l6.905-1.771 14.5-14.5a3.637 3.637 0 00.035-5.169zM16.606 2.26l5.134 5.134M2.521 16.344l5.139 5.13"
    />
  );

export default SvgPencil;
