import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsCameraStop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-camera-stop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-camera-stop_svg__a"
      d="M9 13.5H2.25A1.5 1.5 0 01.75 12V3a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.5 1.5v6.75M19.579 10.915l2.586 1.292a.75.75 0 001.085-.671V3.464a.75.75 0 00-1.085-.671l-2.586 1.292a1.5 1.5 0 00-.829 1.342v4.146a1.5 1.5 0 00.829 1.342z"
    />,
    <rect
      className="controls-camera-stop_svg__a"
      x={12.75}
      y={15}
      width={7.5}
      height={7.5}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgControlsCameraStop;
