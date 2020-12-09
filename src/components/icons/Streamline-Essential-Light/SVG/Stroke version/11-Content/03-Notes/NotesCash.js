import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-cash_svg__a"
      d="M9.5 20.5h-8a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v5M4.5 4.5v-4M8.5 4.5v-4M12.5 4.5v-4M19 14.5h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H16M17.5 21.5v-1M17.5 14.5v-1"
    />,
    <circle className="notes-cash_svg__a" cx={17.5} cy={17.5} r={6} />
  );

export default SvgNotesCash;
