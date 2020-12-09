import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-sync_svg__a"
      d="M8.229 17.152L2.2 10.943a5.669 5.669 0 01-1.088-6.607A5.84 5.84 0 0110.4 2.849L12 4.308l1.6-1.459a5.84 5.84 0 019.287 1.487 5.655 5.655 0 01.192 4.7M15 16.964h-3.5v3.5M22.917 18.2A5.572 5.572 0 0112.1 16.964M20 14.964h3.5v-3.5M12.083 13.731A5.572 5.572 0 0122.9 14.964"
    />
  );

export default SvgLoveItSync;
