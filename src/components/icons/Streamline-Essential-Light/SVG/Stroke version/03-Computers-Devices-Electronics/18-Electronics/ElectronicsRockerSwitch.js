import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsRockerSwitch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-rocker-switch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="electronics-rocker-switch_svg__a"
      d="M16.5 19.5a1 1 0 01-1 1h-6a1 1 0 01-1-1v-16a1 1 0 011-1h9.461a1 1 0 01.914 1.406L16.5 11.5z"
    />,
    <path
      className="electronics-rocker-switch_svg__a"
      d="M14.5 2.5l-4 9v9M10.5 11.5h6"
    />,
    <rect
      className="electronics-rocker-switch_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="electronics-rocker-switch_svg__a"
      d="M3.5 3.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M3.5 20.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M20.5 20.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgElectronicsRockerSwitch;
