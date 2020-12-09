import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsCameraRecord = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-camera-record_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-camera-record_svg__a"
      d="M9 12.75H2.25a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.5 1.5V9M19.579 10.165l2.586 1.292a.75.75 0 001.085-.671V2.714a.75.75 0 00-1.085-.671l-2.586 1.292a1.5 1.5 0 00-.829 1.342v4.146a1.5 1.5 0 00.829 1.342z"
    />,
    <circle
      className="controls-camera-record_svg__a"
      cx={15.75}
      cy={18.75}
      r={4.5}
    />,
    <path
      className="controls-camera-record_svg__a"
      d="M15.75 18.375a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgControlsCameraRecord;
