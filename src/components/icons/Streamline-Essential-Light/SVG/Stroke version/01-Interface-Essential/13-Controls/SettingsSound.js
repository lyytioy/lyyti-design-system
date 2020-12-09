import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsSound = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-sound_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="settings-sound_svg__a"
      x={6.5}
      y={0.501}
      width={11}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="settings-sound_svg__a"
      d="M6.5 7.501h11M11.094 16.46a.493.493 0 01-.2.041H10a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h.9a.51.51 0 01.2.04l2.7 1.159a.5.5 0 00.7-.459v-4.482a.5.5 0 00-.7-.46z"
    />
  );

export default SvgSettingsSound;
