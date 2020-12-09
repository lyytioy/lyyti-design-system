import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsCameraRecord = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-camera-record_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="controls-camera-record_svg__a"
      cx={17}
      cy={18}
      r={5.5}
    />,
    <circle
      className="controls-camera-record_svg__a"
      cx={17}
      cy={18}
      r={2.5}
    />,
    <path
      className="controls-camera-record_svg__a"
      d="M11 13.5H1.5a1 1 0 01-1-1v-11a1 1 0 011-1h13a1 1 0 011 1v8.462M23.5 10.882a1 1 0 01-1.447.894l-4-2a1 1 0 01-.553-.894V5.118a1 1 0 01.553-.894l4-2a1 1 0 011.447.894z"
    />
  );

export default SvgControlsCameraRecord;
