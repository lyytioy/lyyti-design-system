import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockUnlock3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-unlock-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lock-unlock-3_svg__a" cx={11.998} cy={16.03} r={1.5} />,
    <circle className="lock-unlock-3_svg__a" cx={12} cy={16.03} r={7.5} />,
    <path
      className="lock-unlock-3_svg__a"
      d="M17.5 10.947V5.53a5 5 0 00-10 0"
    />
  );

export default SvgLockUnlock3;
