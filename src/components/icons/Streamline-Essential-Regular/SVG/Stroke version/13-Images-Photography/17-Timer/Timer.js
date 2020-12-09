import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".timer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="timer_svg__a"
      d="M12 .75a11.245 11.245 0 11-9.952 6M1.5 1.5L12 12M7.875 1.5a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgTimer;
