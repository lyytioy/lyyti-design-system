import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExe = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".exe_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="exe_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="exe_svg__a"
      d="M8.5 15h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2M5.5 12.004h2M18.5 15h-2a1 1 0 01-1-1v-4a1 1 0 011-1h2M15.5 12.004h2M10.5 15.004l3-6M13.5 15.004l-3-6"
    />
  );

export default SvgExe;
