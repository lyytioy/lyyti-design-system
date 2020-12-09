import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsSwitch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-switch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="electronics-switch_svg__a"
      x={2.25}
      y={14.25}
      width={19.5}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="electronics-switch_svg__a"
      d="M17.25 9.75H6.75a1.5 1.5 0 00-1.5 1.5v3h13.5v-3a1.5 1.5 0 00-1.5-1.5zM12.75 9.75c-.45-.96-3.124-6.695-3.978-7.982a2.214 2.214 0 00-3.12-.629 2.213 2.213 0 00-.629 3.119c.633.953 3.128 3.775 4.669 5.492zM5.25 20.25v3M12 20.25v3M18.75 20.25v3"
    />
  );

export default SvgElectronicsSwitch;
