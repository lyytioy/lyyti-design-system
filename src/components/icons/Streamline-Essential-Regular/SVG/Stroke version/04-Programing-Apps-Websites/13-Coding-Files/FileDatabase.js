import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileDatabase = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-database_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <ellipse
      className="file-database_svg__a"
      cx={12}
      cy={9.003}
      rx={6}
      ry={2.25}
    />,
    <path
      className="file-database_svg__a"
      d="M6 9v3c0 1.243 2.686 2.25 6 2.25s6-1.007 6-2.25V9"
    />,
    <path
      className="file-database_svg__a"
      d="M6 12v3c0 1.243 2.686 2.25 6 2.25s6-1.007 6-2.25v-3"
    />,
    <path
      className="file-database_svg__a"
      d="M22.5 21.753a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5v-19.5A1.5 1.5 0 013 .753h15a1.5 1.5 0 011.048.427l3 2.882a1.5 1.5 0 01.452 1.074z"
    />
  );

export default SvgFileDatabase;
