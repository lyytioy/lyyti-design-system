import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-clock_svg__a"
      d="M8.5 20.5h-7a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v5M4.5 4.5v-4M8.5 4.5v-4M12.5 4.5v-4"
    />,
    <circle className="notes-clock_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path className="notes-clock_svg__a" d="M19.5 17.5h-2v-3" />
  );

export default SvgNotesClock;
