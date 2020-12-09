import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSettingsPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-settings-pin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-settings-pin_svg__a"
      d="M11.293 20.3a.777.777 0 001.414 0L15 15.25h4a1.5 1.5 0 001.5-1.5V6.932A1.671 1.671 0 0019 5.25h-3l-1.293-1.293A2.414 2.414 0 0013 3.25h-2a2.414 2.414 0 00-1.707.707L8 5.25H5a1.671 1.671 0 00-1.5 1.682v6.818a1.5 1.5 0 001.5 1.5h4z"
    />,
    <circle className="camera-settings-pin_svg__a" cx={12} cy={9.75} r={3} />
  );

export default SvgCameraSettingsPin;
