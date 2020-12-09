import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsRockerSwitch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-rocker-switch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="electronics-rocker-switch_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="electronics-rocker-switch_svg__a"
      d="M15.714 20.25H8.25a1.5 1.5 0 01-1.5-1.5V5.25a1.5 1.5 0 011.5-1.5H18a1.5 1.5 0 011.392 2.057l-2.178 5.443v7.5a1.5 1.5 0 01-1.5 1.5z"
    />,
    <path
      className="electronics-rocker-switch_svg__a"
      d="M11.25 20.25v-9l3-7.5M11.25 11.25h5.964M3.75 3.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M3.75 19.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M20.25 19.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgElectronicsRockerSwitch;
