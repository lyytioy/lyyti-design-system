import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock7 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-7_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="lock-7_svg__a"
      d="M.5 18.505a1 1 0 011-1h16a1 1 0 011 1v4a.984.984 0 01-.978 1h-16a1 1 0 01-1-1z"
    />,
    <path
      className="lock-7_svg__a"
      d="M18.5 22.5l3.018-.013a2 2 0 10-.018-4l-3 .013M3.5 17.5v6M4.5 17.5v-11a6 6 0 0112-.054V17.5"
    />,
    <path
      className="lock-7_svg__a"
      d="M7.5 17.5V6.986a3 3 0 116-.027V17.5M13.5 14.5h3"
    />
  );

export default SvgLock7;
