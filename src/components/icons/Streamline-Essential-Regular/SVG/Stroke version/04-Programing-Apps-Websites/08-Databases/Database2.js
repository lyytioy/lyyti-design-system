import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabase2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-2_svg__a"
      cx={12}
      cy={5.251}
      rx={11.25}
      ry={4.5}
    />,
    <path
      className="database-2_svg__a"
      d="M.75 5.251V12c0 2.485 5.037 4.5 11.25 4.5s11.25-2.014 11.25-4.5V5.251"
    />,
    <path
      className="database-2_svg__a"
      d="M.75 12v6.75c0 2.485 5.037 4.5 11.25 4.5s11.25-2.015 11.25-4.5V12"
    />
  );

export default SvgDatabase2;
