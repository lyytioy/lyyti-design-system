import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSettingsFrame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-settings-frame_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-settings-frame_svg__a"
      d="M9 7.866l1.083-1.587a1.061 1.061 0 01.781-.413h2.272a1.061 1.061 0 01.781.413l.8 1.174a1.063 1.063 0 00.782.413H17a1.671 1.671 0 011.5 1.682v5.818a1.5 1.5 0 01-1.5 1.5H7a1.5 1.5 0 01-1.5-1.5V9.548A1.671 1.671 0 017 7.866h2"
    />,
    <circle
      className="camera-settings-frame_svg__a"
      cx={12}
      cy={12.366}
      r={2.5}
    />,
    <path
      className="camera-settings-frame_svg__a"
      d="M.977 5.366l1.039.866a1 1 0 010 1.536L.86 8.732a1 1 0 000 1.536l1.156.964a1 1 0 010 1.536l-1.156.964a1 1 0 000 1.536l1.156.964a1 1 0 010 1.536l-1.039.866M23.023 5.366l-1.039.866a1 1 0 000 1.536l1.156.964a1 1 0 010 1.536l-1.156.964a1 1 0 000 1.536l1.156.964a1 1 0 010 1.536l-1.156.964a1 1 0 000 1.536l1.039.866"
    />
  );

export default SvgCameraSettingsFrame;
