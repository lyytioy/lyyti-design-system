import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseBug = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-bug_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-bug_svg__a"
      d="M12 9.751C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.33-1.443 2.526-3.738 3.349M23.25 8.281v-3.03"
    />,
    <path
      className="database-bug_svg__a"
      d="M.75 5.251v6c0 1.953 3.112 3.616 7.461 4.238"
    />,
    <path
      className="database-bug_svg__a"
      d="M.75 11.251v6c0 2.176 3.863 3.992 9 4.409M21 19.967a3.151 3.151 0 01-3 3.284 3.151 3.151 0 01-3-3.284v-3.433a3.15 3.15 0 013-3.283 3.15 3.15 0 013 3.283zM20.634 14.962l2.616-1.961M20.74 21.306l2.51 1.945M21 18.501h2.25M15.366 14.962l-2.616-1.961M15.26 21.306l-2.51 1.945M15 18.501h-2.25M15 17.001h6"
    />
  );

export default SvgDatabaseBug;
