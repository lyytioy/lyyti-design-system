import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsVertical1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-vertical-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="settings-vertical-1_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="settings-vertical-1_svg__a"
      d="M12 14.5v-7M18.531 14.5v-2M5.5 8.5v-5M5.5 14.5v-4M18.531 10.5v-7M12 5.5v-2M16.531 11.5a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1zM10 6.5a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1zM3.5 9.5a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1z"
    />,
    <circle
      className="settings-vertical-1_svg__a"
      cx={18.542}
      cy={19}
      r={1.5}
    />,
    <circle className="settings-vertical-1_svg__a" cx={12} cy={19} r={1.5} />,
    <circle className="settings-vertical-1_svg__a" cx={5.5} cy={19} r={1.5} />
  );

export default SvgSettingsVertical1;
