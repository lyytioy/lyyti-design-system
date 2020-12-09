import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgApp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app_svg__a"
      d="M1.5 3.754h21M1.5 20.254h21M5.25 15.754v-6a1.5 1.5 0 013 0v6M5.25 12.754h3M17.25 15.754v-7.5M17.25 8.254H18a2.25 2.25 0 010 4.5h-.75M11.25 15.754v-7.5M11.25 8.254H12a2.25 2.25 0 010 4.5h-.75"
    />
  );

export default SvgApp;
