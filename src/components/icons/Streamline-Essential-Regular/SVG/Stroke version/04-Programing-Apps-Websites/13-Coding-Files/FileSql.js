import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileSql = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-sql_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-sql_svg__a"
      d="M5.249 23.254h-3a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.439l5.871 5.871a1.5 1.5 0 01.44 1.061v3.129"
    />,
    <path
      className="file-sql_svg__a"
      d="M20.249 8.254h-6a1.5 1.5 0 01-1.5-1.5v-6M20.249 14.254v6a1.5 1.5 0 001.5 1.5h1.5M11.249 14.254h-1.5a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5h-1.5M17.249 20.254a1.5 1.5 0 11-3 0v-4.5a1.5 1.5 0 113 0zM15.749 21.754l1.5 1.5"
    />
  );

export default SvgFileSql;
