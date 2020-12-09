import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCamera1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="camera-1_svg__a" cx={14.25} cy={12.75} r={5.25} />,
    <path
      className="camera-1_svg__a"
      d="M19.5 6l-1.085-2.171A1.5 1.5 0 0017.073 3h-5.646a1.5 1.5 0 00-1.342.829L9 6H2.25a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-1.5-1.5z"
    />,
    <path
      className="camera-1_svg__a"
      d="M4.125 9a.375.375 0 11-.375.375A.375.375 0 014.125 9M5.25 6V4.5"
    />
  );

export default SvgCamera1;
