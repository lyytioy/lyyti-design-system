import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSwitchOff1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".switch-off-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="switch-off-1_svg__a"
      x={0.5}
      y={0.501}
      width={23}
      height={23}
      rx={1}
      ry={1}
      transform="rotate(-180 12 12.001)"
    />,
    <rect
      className="switch-off-1_svg__a"
      x={8.5}
      y={6.501}
      width={7}
      height={11}
      rx={1}
      ry={1}
      transform="rotate(-180 12 12.001)"
    />,
    <path className="switch-off-1_svg__a" d="M15.5 13.501h-7" />
  );

export default SvgSwitchOff1;
