import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsSwitch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-switch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="electronics-switch_svg__a"
      x={2.5}
      y={14.497}
      width={19}
      height={5}
      rx={1}
      ry={1}
    />,
    <path
      className="electronics-switch_svg__a"
      d="M6.5 10.5h11a1 1 0 011 1v3h-13v-3a1 1 0 011-1zM5.5 19.497v4M12 19.497v4M18.5 19.497v4M9.367 10.5L7.145 2.951a1.912 1.912 0 113.709-.911l1.674 8.46"
    />
  );

export default SvgElectronicsSwitch;
