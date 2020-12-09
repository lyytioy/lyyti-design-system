import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesSubtract = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-subtract_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="notes-subtract_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="notes-subtract_svg__a"
      d="M14.25 17.25h6M8.25 20.25h-6a1.464 1.464 0 01-1.5-1.5V3.857a1.557 1.557 0 011.5-1.607h15a1.557 1.557 0 011.5 1.607V8.25M5.25.75v4.5M9.75.75v4.5M14.25.75v4.5"
    />
  );

export default SvgNotesSubtract;
