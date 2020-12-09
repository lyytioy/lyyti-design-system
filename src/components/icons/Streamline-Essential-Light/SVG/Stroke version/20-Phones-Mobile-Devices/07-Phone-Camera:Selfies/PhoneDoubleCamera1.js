import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneDoubleCamera1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-double-camera-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="phone-double-camera-1_svg__a"
      x={0.5}
      y={6.5}
      width={23}
      height={11}
      rx={4}
      ry={4}
    />,
    <circle className="phone-double-camera-1_svg__a" cx={7} cy={12} r={3.5} />,
    <path
      className="phone-double-camera-1_svg__a"
      d="M7 10.5A1.5 1.5 0 018.5 12M17 10.5a1.5 1.5 0 011.5 1.5"
    />,
    <circle className="phone-double-camera-1_svg__a" cx={17} cy={12} r={3.5} />
  );

export default SvgPhoneDoubleCamera1;
