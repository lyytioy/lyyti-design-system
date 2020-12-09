import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="notes-cash_svg__a"
      d="M18.75 14.25h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H15.75M17.25 14.25v-.75M17.25 21v-.75"
    />,
    <circle className="notes-cash_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="notes-cash_svg__a"
      d="M8.25 20.25h-6a1.464 1.464 0 01-1.5-1.5V3.857a1.556 1.556 0 011.5-1.607h15a1.556 1.556 0 011.5 1.607V8.25M5.25.75v4.5M9.75.75v4.5M14.25.75v4.5"
    />
  );

export default SvgNotesCash;
