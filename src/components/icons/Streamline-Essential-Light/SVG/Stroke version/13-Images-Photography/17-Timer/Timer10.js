import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTimer10 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".timer-10_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="timer-10_svg__a" d="M1 9.003l3 4.5 3.5-4" />,
    <path
      className="timer-10_svg__a"
      d="M4.006 13.5A9.7 9.7 0 0113.15 2.51a9.5 9.5 0 01.7 18.987M10 15.511h4"
    />,
    <path
      className="timer-10_svg__a"
      d="M12 15.511v-7.5a.5.5 0 00-.812-.39L9.5 8.971M20 13.011a2.5 2.5 0 01-5 0v-3a2.5 2.5 0 015 0z"
    />
  );

export default SvgTimer10;
