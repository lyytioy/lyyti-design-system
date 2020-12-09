import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="lock-circle_svg__a"
      d="M7.5 10.535a1 1 0 011-1.005l7.006.005a1 1 0 011 .995v4.98a1 1 0 01-.995 1l-7 .032a1 1 0 01-1-1zM12.014 14.53l-.01-2.75M9.01 9.53v-.986a3 3 0 116-.027V9.53"
    />,
    <path
      className="lock-circle_svg__a"
      d="M12 11.53a.249.249 0 01.251.249.249.249 0 01-.251.251.249.249 0 01-.251-.249.251.251 0 01.251-.251"
    />,
    <circle className="lock-circle_svg__a" cx={12.004} cy={12.03} r={11.5} />
  );

export default SvgLockCircle;
