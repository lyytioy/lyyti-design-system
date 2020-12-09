import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabase = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <ellipse
      className="database_svg__a"
      cx={12}
      cy={5.251}
      rx={11.25}
      ry={4.5}
    />,
    <path
      className="database_svg__a"
      d="M.75 5.251v4.5c0 2.485 5.037 4.5 11.25 4.5s11.25-2.015 11.25-4.5v-4.5"
    />,
    <path
      className="database_svg__a"
      d="M.75 9.751v4.5c0 2.485 5.037 4.5 11.25 4.5s11.25-2.015 11.25-4.5v-4.5M12 18.751v4.5M6 23.251h12M21.375 22.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M2.625 22.5a.375.375 0 10.375.376.375.375 0 00-.375-.375"
    />
  );

export default SvgDatabase;
