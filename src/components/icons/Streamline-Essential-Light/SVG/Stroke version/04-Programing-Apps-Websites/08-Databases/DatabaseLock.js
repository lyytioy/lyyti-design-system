import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-lock_svg__a"
      cx={10.022}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-lock_svg__a"
      d="M11.021 12.479c-.33.015-.662.022-1 .022-5.246 0-9.5-1.79-9.5-4M11.021 16.979c-.33.015-.662.022-1 .022-5.246 0-9.5-1.79-9.5-4M19.521 9.001v-4.5"
    />,
    <path
      className="database-lock_svg__a"
      d="M.521 4.5v13c0 2.21 4.254 4 9.5 4 .338 0 .672-.007 1-.022M23.521 22.5a1 1 0 01-1 1h-7a1 1 0 01-1-1v-6a1 1 0 011-1h7a1 1 0 011 1z"
    />,
    <circle
      className="database-lock_svg__a"
      cx={19.021}
      cy={19.564}
      r={1.25}
    />,
    <path
      className="database-lock_svg__a"
      d="M21.521 14a2.5 2.5 0 10-5 0v1.5h5z"
    />
  );

export default SvgDatabaseLock;
