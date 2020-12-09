import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-refresh_svg__a"
      d="M12 9.751C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.181-1.138 2.256-3 3.059M23.25 8.251v-3"
    />,
    <path
      className="database-refresh_svg__a"
      d="M.75 5.251v6c0 1.966 3.15 3.637 7.55 4.249"
    />,
    <path
      className="database-refresh_svg__a"
      d="M.75 11.251v6c0 2.155 3.788 3.956 8.846 4.4M19.5 15.751h3.75v-4.5M23.061 15.751a6 6 0 10-1.121 5.242"
    />
  );

export default SvgDatabaseRefresh;
