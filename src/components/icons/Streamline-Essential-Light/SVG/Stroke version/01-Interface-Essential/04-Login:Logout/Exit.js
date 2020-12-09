import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".exit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="exit_svg__a"
      x={0.5}
      y={6}
      width={23}
      height={12}
      rx={2}
      ry={2}
    />,
    <path
      className="exit_svg__a"
      d="M14.499 9v6M13.499 15h2M13.499 9h2M8.502 15l3-6M11.502 15l-3-6M6.5 15h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2M3.504 12h2M17.502 9h3M19.002 9v6"
    />
  );

export default SvgExit;
