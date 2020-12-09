import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-add_svg__a"
      d="M12 9.751C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.326-1.435 2.519-3.719 3.343M23.25 10.531v-5.28"
    />,
    <path
      className="database-add_svg__a"
      d="M.75 5.251v6c0 1.968 3.161 3.642 7.563 4.252"
    />,
    <path
      className="database-add_svg__a"
      d="M.75 11.251v6c0 2.174 3.856 3.988 8.982 4.408"
    />,
    <circle className="database-add_svg__a" cx={17.25} cy={17.251} r={6} />,
    <path className="database-add_svg__a" d="M17.25 14.251v6M14.25 17.251h6" />
  );

export default SvgDatabaseAdd;
