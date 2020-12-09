import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSettingsFlip = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-settings-flip_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-settings-flip_svg__a"
      d="M15.806 1.492A11.155 11.155 0 0112 23.166M16.5 3.75l-.694-2.258L18 .75M8.194 22.508A11.155 11.155 0 0112 .834"
    />,
    <path
      className="camera-settings-flip_svg__a"
      d="M7.5 20.25l.694 2.258L6 23.25M8.526 7.5L10.1 6h3.775l1.574 1.5h1.57a1.812 1.812 0 011.731 1.742v5.7a1.654 1.654 0 01-1.731 1.558H6.981a1.654 1.654 0 01-1.731-1.554v-5.7A1.812 1.812 0 016.981 7.5h1.545"
    />,
    <circle className="camera-settings-flip_svg__a" cx={12} cy={12} r={2.25} />
  );

export default SvgCameraSettingsFlip;
