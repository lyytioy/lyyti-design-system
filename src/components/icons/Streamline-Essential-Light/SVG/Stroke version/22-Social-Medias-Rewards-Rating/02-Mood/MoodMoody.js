import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodMoody = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-moody_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="mood-moody_svg__a"
      d="M12 .5v23M22.542 8.5A10.007 10.007 0 0014 1.55M14 21.45a9.94 9.94 0 005-1.95M10 1.55a10 10 0 000 19.9M12 18.5a6 6 0 01-5.2-3M17.2 17.5a6 6 0 00-5.2-3M5.5 9.5a2.5 2.5 0 004 0M18.5 9.5a2.5 2.5 0 01-4 0M23 14.5a2.13 2.13 0 01-2 2 2.13 2.13 0 01-2-2c0-1.5 2-4 2-4s2 2.5 2 4z"
    />
  );

export default SvgMoodMoody;
