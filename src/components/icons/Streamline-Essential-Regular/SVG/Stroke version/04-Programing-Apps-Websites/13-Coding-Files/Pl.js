import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPl = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pl_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="pl_svg__a"
      d="M1.491 3.754h21M1.491 20.254h21M7.491 15.754v-7.5M7.491 8.254h.75a2.25 2.25 0 010 4.5h-.75M13.491 8.254v6a1.5 1.5 0 001.5 1.5h1.5"
    />
  );

export default SvgPl;
