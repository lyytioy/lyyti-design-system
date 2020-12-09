import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCrossOver = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cross-over_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cross-over_svg__a"
      d="M23.25.748l-22.5 22.5M23.25 7.498V.748H16.5M.75.748L9 8.998M23.25 16.498v6.75H16.5M15 14.998l8.25 8.25"
    />
  );

export default SvgCrossOver;
