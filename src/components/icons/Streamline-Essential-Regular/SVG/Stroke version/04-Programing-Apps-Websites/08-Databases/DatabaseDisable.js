import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-disable_svg__a"
      d="M12 9.751C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.181-1.138 2.256-3 3.059M23.25 10.501v-5.25"
    />,
    <path
      className="database-disable_svg__a"
      d="M.75 5.251v6c0 1.961 3.138 3.63 7.515 4.246"
    />,
    <path
      className="database-disable_svg__a"
      d="M.75 11.251v6c0 1.952 3.107 3.613 7.45 4.237"
    />,
    <circle
      className="database-disable_svg__a"
      cx={17.251}
      cy={17.251}
      r={6}
    />,
    <path className="database-disable_svg__a" d="M13.009 21.492l8.483-8.484" />
  );

export default SvgDatabaseDisable;
