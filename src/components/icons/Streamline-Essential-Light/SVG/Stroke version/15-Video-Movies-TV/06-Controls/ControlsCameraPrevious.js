import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsCameraPrevious = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-camera-previous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="controls-camera-previous_svg__a"
      d="M19.5 15.5v5.016L16.5 18l3-2.5z"
    />,
    <circle
      className="controls-camera-previous_svg__a"
      cx={17}
      cy={18}
      r={5.5}
    />,
    <path
      className="controls-camera-previous_svg__a"
      d="M11 13.5H1.5a1 1 0 01-1-1v-11a1 1 0 011-1h13a1 1 0 011 1v8.462M23.5 10.882a1 1 0 01-1.447.894l-4-2a1 1 0 01-.553-.894V5.118a1 1 0 01.553-.894l4-2a1 1 0 011.447.894zM14.5 15.5v5.016"
    />
  );

export default SvgControlsCameraPrevious;
