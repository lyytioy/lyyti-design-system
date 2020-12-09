import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingBar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-bar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="loading-bar_svg__a"
      x={0.75}
      y={2.247}
      width={22.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="loading-bar_svg__a"
      d="M.75 6.747h22.5M17.25 17.247a3 3 0 000-6H6.75a3 3 0 000 6zM6.75 11.247v6M9.75 11.247v6M12.75 11.247v6"
    />
  );

export default SvgLoadingBar;
