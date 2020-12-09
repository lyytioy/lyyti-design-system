import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSql1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sql-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="sql-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="sql-1_svg__a"
      d="M8.5 11.491H6.354A1.854 1.854 0 005.525 15l1.95.975a1.854 1.854 0 01-.829 3.512H4.5M14.475 16.979a2 2 0 01-4 0v-3.5a2 2 0 014 0zM14.475 20.479l-3.025-1.783M16.475 11.479v6.5a1.5 1.5 0 001.5 1.5h2.5"
    />
  );

export default SvgSql1;
