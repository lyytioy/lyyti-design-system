import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockUnlock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-unlock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="lock-unlock-1_svg__a"
      d="M6.5 6a5.5 5.5 0 0111 0v3.5M20.5 11.5a2 2 0 00-2-2h-13a2 2 0 00-2 2v10a2 2 0 002 2h13a2 2 0 002-2z"
    />,
    <circle className="lock-unlock-1_svg__a" cx={12} cy={16.5} r={1.25} />
  );

export default SvgLockUnlock1;
