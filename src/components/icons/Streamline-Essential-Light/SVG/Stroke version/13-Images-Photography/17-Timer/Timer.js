import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".timer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="timer_svg__a"
      d="M12 12.746L4.404 2.534M15 3.731A9.5 9.5 0 113.92 7.746"
    />,
    <circle className="timer_svg__a" cx={11.5} cy={3.254} r={1.5} />
  );

export default SvgTimer;
