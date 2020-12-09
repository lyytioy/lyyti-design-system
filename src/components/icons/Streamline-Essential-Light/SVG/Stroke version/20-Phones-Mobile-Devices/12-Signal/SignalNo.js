import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalNo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-no_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="signal-no_svg__a"
      d="M.5 12h3M5.5 12h3M10.5 12h3M15.5 12h3M20.5 12h3"
    />
  );

export default SvgSignalNo;
