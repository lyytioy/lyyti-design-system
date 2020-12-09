import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-lock_svg__a"
      d="M15.016 9.594C7.5 10.375.75 8.128.75 5.251c0-2.486 5.037-4.5 11.25-4.5s11.25 2.014 11.25 4.5c0 1.184-1.144 2.262-3.015 3.065M23.25 10.501v-5.25"
    />,
    <path
      className="database-lock_svg__a"
      d="M.75 5.251v6c0 2.373 4.594 4.318 10.42 4.488"
    />,
    <path
      className="database-lock_svg__a"
      d="M.75 11.251v6c0 2.373 4.6 4.318 10.42 4.488"
    />,
    <rect
      className="database-lock_svg__a"
      x={14.25}
      y={15.751}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="database-lock_svg__a"
      d="M18.75 11.251a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.155a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgDatabaseLock;
