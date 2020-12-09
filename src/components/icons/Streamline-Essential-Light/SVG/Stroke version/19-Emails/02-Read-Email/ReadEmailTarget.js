import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-target_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="read-email-target_svg__a"
      d="M18.168 2.3a11.489 11.489 0 00-12.336 0M21.7 18.168a11.484 11.484 0 000-12.336M2.3 5.832a11.484 11.484 0 000 12.336M5.832 21.7a11.489 11.489 0 0012.336 0M23.5 23.5L19 19M.5 23.5L5 19M23.5.5L19 5M.5.5L5 5M18.5 9v6.5a1 1 0 01-1 1h-11a1 1 0 01-1-1V9"
    />,
    <path
      className="read-email-target_svg__a"
      d="M18.5 9v-.5a1 1 0 00-1-1h-11a1 1 0 00-1 1V9l5.705 3.253a1.5 1.5 0 001.59 0z"
    />
  );

export default SvgReadEmailTarget;
