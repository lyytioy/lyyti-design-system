import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneDoubleCamera1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-double-camera-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="phone-double-camera-1_svg__a"
      x={0.75}
      y={6}
      width={22.5}
      height={12}
      rx={3}
      ry={3}
    />,
    <circle className="phone-double-camera-1_svg__a" cx={6.75} cy={12} r={3} />,
    <circle className="phone-double-camera-1_svg__a" cx={17.25} cy={12} r={3} />
  );

export default SvgPhoneDoubleCamera1;
