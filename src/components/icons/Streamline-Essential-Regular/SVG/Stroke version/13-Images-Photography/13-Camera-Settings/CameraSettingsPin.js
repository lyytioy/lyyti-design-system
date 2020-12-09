import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSettingsPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-settings-pin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="camera-settings-pin_svg__a"
      cx={12}
      cy={10.051}
      r={3.75}
    />,
    <path
      className="camera-settings-pin_svg__a"
      d="M20.25 4.051H18l-.671-1.342a3 3 0 00-2.683-1.658H9.354a3 3 0 00-2.683 1.658L6 4.051H3.75a3 3 0 00-3 3v7.5a3 3 0 003 3H8l3.376 5.064a.75.75 0 001.248 0L16 17.551h4.25a3 3 0 003-3v-7.5a3 3 0 00-3-3z"
    />
  );

export default SvgCameraSettingsPin;
