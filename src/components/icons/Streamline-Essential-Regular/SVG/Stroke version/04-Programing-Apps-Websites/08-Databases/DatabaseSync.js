import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-sync_svg__a"
      d="M12 9.751C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.323-1.428 2.513-3.7 3.337M23.25 9.016V5.251"
    />,
    <path
      className="database-sync_svg__a"
      d="M.75 5.251v6c0 2.067 3.486 3.809 8.235 4.336"
    />,
    <path
      className="database-sync_svg__a"
      d="M.75 11.251v6c0 1.96 3.134 3.628 7.508 4.245M15 18.751h-3.75v3.75M22.667 19.484a5.572 5.572 0 01-10.74-.733M19.5 15.751h3.75v-3.75M11.833 15.017a5.573 5.573 0 0110.74.734"
    />
  );

export default SvgDatabaseSync;
