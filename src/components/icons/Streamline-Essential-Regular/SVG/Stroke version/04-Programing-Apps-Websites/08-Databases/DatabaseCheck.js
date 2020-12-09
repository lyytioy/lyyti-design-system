import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-check_svg__a"
      d="M12 9.751C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.174-1.125 2.243-2.967 3.045M23.25 10.452V5.251"
    />,
    <path
      className="database-check_svg__a"
      d="M.75 5.251v6c0 1.958 3.128 3.624 7.494 4.243"
    />,
    <path
      className="database-check_svg__a"
      d="M.75 11.251v6c0 2.067 3.486 3.809 8.235 4.336"
    />,
    <circle className="database-check_svg__a" cx={17.25} cy={17.251} r={6} />,
    <path
      className="database-check_svg__a"
      d="M19.924 15.506l-2.905 3.874a.751.751 0 01-1.131.08l-1.5-1.5"
    />
  );

export default SvgDatabaseCheck;
