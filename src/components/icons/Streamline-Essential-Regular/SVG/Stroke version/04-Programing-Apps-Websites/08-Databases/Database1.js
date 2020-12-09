import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabase1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-1_svg__a"
      d="M12 15.751v7.5M4.5 23.251h15M22.875 22.5a.375.375 0 10.375.375.374.374 0 00-.375-.375M1.125 22.5a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />,
    <ellipse
      className="database-1_svg__a"
      cx={12}
      cy={3.751}
      rx={6.75}
      ry={3}
    />,
    <path
      className="database-1_svg__a"
      d="M5.25 3.751v4.5c0 1.657 3.022 3 6.75 3s6.75-1.343 6.75-3v-4.5"
    />,
    <path
      className="database-1_svg__a"
      d="M5.25 8.251v4.5c0 1.657 3.022 3 6.75 3s6.75-1.343 6.75-3v-4.5"
    />
  );

export default SvgDatabase1;
