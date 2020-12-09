import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseHand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-hand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-hand_svg__a"
      d="M.75 14.251v9M.75 21.751h15a3 3 0 00-3-3H9a3 3 0 00-3-3H.75M6 18.751h3"
    />,
    <ellipse
      className="database-hand_svg__a"
      cx={16.5}
      cy={3.751}
      rx={6.75}
      ry={3}
    />,
    <path
      className="database-hand_svg__a"
      d="M9.75 3.751v4.5c0 1.657 3.022 3 6.75 3s6.75-1.343 6.75-3v-4.5"
    />,
    <path
      className="database-hand_svg__a"
      d="M16.5 15.751c3.728 0 6.75-1.343 6.75-3v-4.5M9.75 8.251v4.5"
    />
  );

export default SvgDatabaseHand;
