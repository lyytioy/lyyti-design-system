import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHqx = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hqx_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hqx_svg__a"
      d="M1.491 3.754h21M1.491 20.254h21M4.491 15.754v-7.5M7.491 15.754v-7.5M4.491 12.754h3M13.491 14.254a1.5 1.5 0 01-3 0v-4.5a1.5 1.5 0 113 0zM11.991 15.754l1.5 1.5M16.491 8.254l3 7.5M19.491 8.254l-3 7.5"
    />
  );

export default SvgHqx;
