import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodMoody = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-moody_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mood-moody_svg__a"
      d="M8.927 9.2a1.95 1.95 0 01-3.677 0M12 .75v22.5M9.75 2.278a9.751 9.751 0 000 19.444M12 18.75a6.745 6.745 0 01-5.614-3M15.073 9.2a1.95 1.95 0 003.677 0M19.5 19.686a9.7 9.7 0 01-5.25 2.036M14.25 2.278A9.76 9.76 0 0122.78 9M12 15.532a6.727 6.727 0 014.5 1.718M23.25 15a2.25 2.25 0 01-4.5 0c0-1.243 2.25-3.75 2.25-3.75s2.25 2.507 2.25 3.75z"
    />
  );

export default SvgMoodMoody;
