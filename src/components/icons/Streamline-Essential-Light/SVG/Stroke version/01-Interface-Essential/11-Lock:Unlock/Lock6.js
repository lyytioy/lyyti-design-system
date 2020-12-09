import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock6 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-6_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lock-6_svg__a" cx={12} cy={16.03} r={2} />,
    <path
      className="lock-6_svg__a"
      d="M20.5 13.53a4 4 0 00-4-4h-9a4 4 0 00-4 4v6a4 4 0 004 4h9a4 4 0 004-4z"
    />,
    <path
      className="lock-6_svg__a"
      d="M6.5 9.656V6.03a5.5 5.5 0 0111 0v3.626"
    />
  );

export default SvgLock6;
