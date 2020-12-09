import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSettingsFlip = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-settings-flip_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-settings-flip_svg__a"
      d="M15.552 2.119A10.5 10.5 0 0112 22.5M17.529 5.487l-1.977-3.368 3.97-.698M8.448 21.881A10.5 10.5 0 0112 1.5"
    />,
    <path
      className="camera-settings-flip_svg__a"
      d="M6.471 18.513l1.977 3.368-3.97.698M18.5 15.5a1 1 0 01-1 1h-10a1 1 0 01-1-1v-6a1 1 0 011-1H10l.223-.447a1 1 0 01.894-.553h2.764a1 1 0 01.894.553L15 8.5h2.5a1 1 0 011 1z"
    />,
    <circle className="camera-settings-flip_svg__a" cx={12.5} cy={12.5} r={2} />
  );

export default SvgCameraSettingsFlip;
