import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSettingsRotate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-settings-rotate_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-settings-rotate_svg__a"
      d="M6.516 16.186l2.481 3.168L5.5 21.492M15.818 4.508H19a1.672 1.672 0 011.5 1.681v6.819a1.5 1.5 0 01-1.5 1.5H5a1.5 1.5 0 01-1.5-1.5V6.189A1.672 1.672 0 015 4.508h3.182M8.182 4.508l1.813-1.662a1.485 1.485 0 01.868-.338h2.274a1.485 1.485 0 01.868.338l1.813 1.662M22.305 13.008a2.643 2.643 0 011.2 2c0 2.353-4.618 4.3-10.5 4.5"
    />,
    <path
      className="camera-settings-rotate_svg__a"
      d="M9 19.353C4.1 18.837.5 17.087.5 15.008a2.63 2.63 0 011.181-1.988"
    />,
    <circle
      className="camera-settings-rotate_svg__a"
      cx={12}
      cy={9.008}
      r={2.5}
    />,
    <path
      className="camera-settings-rotate_svg__a"
      d="M17.5 7.258a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgCameraSettingsRotate;
