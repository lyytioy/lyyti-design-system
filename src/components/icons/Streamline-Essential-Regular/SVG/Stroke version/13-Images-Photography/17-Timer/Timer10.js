import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimer10 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".timer-10_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="timer-10_svg__a"
      d="M13.5 21.75A9.75 9.75 0 103.75 12v1.5"
    />,
    <path
      className="timer-10_svg__a"
      d="M.75 10.5l3 3 3-3M9 8.25h.75a.75.75 0 01.75.75v5.25M9 14.25h3M18 12.75a1.5 1.5 0 01-3 0v-3a1.5 1.5 0 013 0z"
    />
  );

export default SvgTimer10;
