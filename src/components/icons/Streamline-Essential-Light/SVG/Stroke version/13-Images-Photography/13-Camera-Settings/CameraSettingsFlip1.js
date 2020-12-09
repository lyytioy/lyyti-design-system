import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSettingsFlip1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-settings-flip-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-settings-flip-1_svg__a"
      d="M19.079 1.302l.431 3.931-3.833.336M18 15.337a1 1 0 01-1 1H7a1 1 0 01-1-1v-6a1 1 0 011-1h4l.224-.448a1 1 0 01.894-.552h2.264a1 1 0 01.894.552l.224.448H17a1 1 0 011 1z"
    />,
    <circle
      className="camera-settings-flip-1_svg__a"
      cx={13}
      cy={12.337}
      r={2}
    />,
    <path
      className="camera-settings-flip-1_svg__a"
      d="M5.456 22.698l-.638-3.902 3.809-.541M2 11.837a10 10 0 0117.51-6.6M22 11.837A10 10 0 014.818 18.8"
    />
  );

export default SvgCameraSettingsFlip1;
