import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock5 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-5_svg__a{fill:none;stroke:currentColor;stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lock-5_svg__a" cx={12} cy={15} r={8.25} />,
    <circle
      cx={12}
      cy={15}
      r={2.25}
      strokeMiterlimit={10}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    />,
    <path
      className="lock-5_svg__a"
      d="M6.75 8.635V6a5.25 5.25 0 0110.5 0v2.635"
    />
  );

export default SvgLock5;
