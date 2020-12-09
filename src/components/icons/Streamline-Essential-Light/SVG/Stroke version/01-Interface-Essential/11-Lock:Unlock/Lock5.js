import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock5 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-5_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lock-5_svg__a" cx={12} cy={16.03} r={7.5} />,
    <circle className="lock-5_svg__a" cx={12} cy={16.03} r={1.5} />,
    <path
      className="lock-5_svg__a"
      d="M17.5 10.937V6.03a5.5 5.5 0 00-11 0v4.907"
    />
  );

export default SvgLock5;
