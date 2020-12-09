import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSwitchOn1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".switch-on-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="switch-on-1_svg__a"
      x={0.5}
      y={0.501}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <rect
      className="switch-on-1_svg__a"
      x={8.5}
      y={6.501}
      width={7}
      height={11}
      rx={1}
      ry={1}
    />,
    <path className="switch-on-1_svg__a" d="M8.5 10.501h7" />
  );

export default SvgSwitchOn1;
