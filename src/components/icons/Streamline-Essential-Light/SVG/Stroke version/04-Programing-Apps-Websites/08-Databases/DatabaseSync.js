import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-sync_svg__a"
      cx={10}
      cy={4.501}
      rx={9.5}
      ry={4}
    />,
    <path
      className="database-sync_svg__a"
      d="M10 12.5c-5.246 0-9.5-1.79-9.5-4M9 16.979C4.224 16.769.5 15.068.5 13"
    />,
    <path
      className="database-sync_svg__a"
      d="M9 21.479C4.224 21.269.5 19.568.5 17.5v-13M19.5 4.501v5M15 18.501h-3.5v3.5M22.917 19.734A5.572 5.572 0 0112.1 18.5M20 16.501h3.5v-3.5M12.083 15.268A5.572 5.572 0 0122.9 16.5"
    />
  );

export default SvgDatabaseSync;
