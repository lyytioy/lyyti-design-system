import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="email-action-sync_svg__a"
      x={2.5}
      y={11.5}
      width={19}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="email-action-sync_svg__a"
      d="M21.062 11.959L12 19l-9.063-7.062M16.5 1v2.5H14M7.5 3.483a4.88 4.88 0 019 .017M7.5 9V6.5H10M16.5 6.5a4.875 4.875 0 01-9 0"
    />
  );

export default SvgEmailActionSync;
