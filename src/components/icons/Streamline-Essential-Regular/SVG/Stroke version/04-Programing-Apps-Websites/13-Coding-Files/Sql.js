import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSql = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sql_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="sql_svg__a"
      d="M1.5 3.754h21M1.5 20.254h21M16.5 8.254v6a1.5 1.5 0 001.5 1.5h1.5M7.5 8.254H6a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5H4.5M13.5 14.254a1.5 1.5 0 01-3 0v-4.5a1.5 1.5 0 113 0zM12 15.754l1.5 1.5"
    />
  );

export default SvgSql;
