import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-remove_svg__a"
      d="M12 9.751C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.328-1.44 2.522-3.729 3.346M23.25 9.751v-4.5"
    />,
    <path
      className="database-remove_svg__a"
      d="M.75 5.251v6c0 1.957 3.125 3.623 7.487 4.242"
    />,
    <path
      className="database-remove_svg__a"
      d="M.75 11.251v6c0 2.068 3.489 3.811 8.242 4.337"
    />,
    <circle className="database-remove_svg__a" cx={17.25} cy={17.251} r={6} />,
    <path
      className="database-remove_svg__a"
      d="M19.5 15L15 19.5M15 15l4.5 4.5"
    />
  );

export default SvgDatabaseRemove;
