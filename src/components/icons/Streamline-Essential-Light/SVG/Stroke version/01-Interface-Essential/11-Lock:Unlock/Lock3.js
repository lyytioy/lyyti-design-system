import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLock3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lock-3_svg__a" cx={12} cy={16} r={7.5} />,
    <circle className="lock-3_svg__a" cx={12} cy={16} r={4} />,
    <path
      className="lock-3_svg__a"
      d="M12 11v2M12 19v2M17 16h-2M9 16H7M12 15.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M17.5 10.907V6a5.5 5.5 0 00-11 0v4.907"
    />
  );

export default SvgLock3;
