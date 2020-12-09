import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsSound = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-sound_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="settings-sound_svg__a"
      d="M11.392 14.577a.749.749 0 01-.295.061H9.751a.749.749 0 00-.75.75v1.5a.75.75 0 00.75.75H11.1a.748.748 0 01.295.06l2.563 1.742A.752.752 0 0015 18.75v-5.225a.751.751 0 00-1.046-.689z"
    />,
    <rect
      className="settings-sound_svg__a"
      x={5.251}
      y={0.75}
      width={13.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path className="settings-sound_svg__a" d="M5.251 7.5h13.5" />
  );

export default SvgSettingsSound;
