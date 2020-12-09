import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSettingsFocus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-settings-focus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-settings-focus_svg__a"
      d="M8.5 7a1.063 1.063 0 00.782-.413l.8-1.174A1.061 1.061 0 0110.864 5h2.272a1.061 1.061 0 01.781.413l.8 1.174A1.063 1.063 0 0015.5 7H17a1.671 1.671 0 011.5 1.682V14.5A1.5 1.5 0 0117 16H7a1.5 1.5 0 01-1.5-1.5V8.682A1.671 1.671 0 017 7z"
    />,
    <circle
      className="camera-settings-focus_svg__a"
      cx={12}
      cy={11.5}
      r={2.5}
    />,
    <path
      className="camera-settings-focus_svg__a"
      d="M.5 8a3 3 0 013-3M2.5 8a1 1 0 011-1M.5 16a3 3 0 003 3M2.5 16a1 1 0 001 1M23.5 8a3 3 0 00-3-3M21.5 8a1 1 0 00-1-1M23.5 16a3 3 0 01-3 3M21.5 16a1 1 0 01-1 1"
    />
  );

export default SvgCameraSettingsFocus;
