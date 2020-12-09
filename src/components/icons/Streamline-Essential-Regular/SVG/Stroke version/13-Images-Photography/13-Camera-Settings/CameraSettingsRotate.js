import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSettingsRotate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-settings-rotate_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-settings-rotate_svg__a"
      d="M14.935 21.093c4.787-.618 8.315-2.7 8.315-5.189 0-1.212-.845-2.327-2.261-3.226M2.974 12.7A4.054 4.054 0 00.75 15.9c0 2.972 5.037 5.381 11.25 5.381"
    />,
    <path
      className="camera-settings-rotate_svg__a"
      d="M10.043 23.241L12 21.285l-1.957-1.957M8.526 2.259L10.1.759h3.775l1.574 1.5h1.57A1.812 1.812 0 0118.75 4v6.436a1.654 1.654 0 01-1.731 1.554H6.981a1.654 1.654 0 01-1.731-1.553V4a1.812 1.812 0 011.731-1.741h1.545"
    />,
    <circle
      className="camera-settings-rotate_svg__a"
      cx={12}
      cy={6.741}
      r={2.25}
    />
  );

export default SvgCameraSettingsRotate;
