import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSql1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sql-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="sql-1_svg__a"
      x={0.75}
      y={0.754}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="sql-1_svg__a"
      d="M16.5 10.5v6A1.5 1.5 0 0018 18h1.5M7.5 10.5H6A1.5 1.5 0 004.5 12c0 2.25 3 2.25 3 4.5A1.5 1.5 0 016 18H4.5M13.5 16.5a1.5 1.5 0 01-3 0V12a1.5 1.5 0 113 0zM12 18.004l1.5 1.5"
    />
  );

export default SvgSql1;
