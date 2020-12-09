import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="notes-check_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="notes-check_svg__a"
      d="M19.924 15.506l-2.905 3.873a.752.752 0 01-1.131.081l-1.5-1.5M8.25 20.25h-6a1.464 1.464 0 01-1.5-1.5V3.857a1.557 1.557 0 011.5-1.607h15a1.557 1.557 0 011.5 1.607V8.25M5.25.75v4.5M9.75.75v4.5M14.25.75v4.5"
    />
  );

export default SvgNotesCheck;
