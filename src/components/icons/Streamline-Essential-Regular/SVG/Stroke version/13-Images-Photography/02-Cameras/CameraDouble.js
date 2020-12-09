import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-double_svg__a"
      d="M18.75 20.25a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h6c.42-.84.676-1.5 1.677-1.5h3.4c1 0 1.257.66 1.677 1.5h2.25a1.5 1.5 0 011.5 1.5z"
    />,
    <path
      className="camera-double_svg__a"
      d="M5.25 5.25a1.5 1.5 0 011.5-1.5h6c.42-.84.676-1.5 1.677-1.5h3.4c1 0 1.257.66 1.677 1.5h2.25a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5"
    />,
    <circle className="camera-double_svg__a" cx={11.25} cy={15.75} r={3} />,
    <path className="camera-double_svg__a" d="M3 7.5v2.25" />
  );

export default SvgCameraDouble;
