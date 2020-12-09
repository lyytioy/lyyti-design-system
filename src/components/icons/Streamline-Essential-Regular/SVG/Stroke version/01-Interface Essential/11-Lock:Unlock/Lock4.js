import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-width:1.5px;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lock-4_svg__a" cx={12} cy={15} r={8.25} />,
    <path
      className="lock-4_svg__a"
      d="M6.75 8.635V6a5.25 5.25 0 0110.5 0v2.635"
    />,
    <path
      strokeMiterlimit={10}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 13.5v3"
    />
  );

export default SvgLock4;
