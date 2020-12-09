import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLogin2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="login-2_svg__a"
      d="M12.5 2.5H20a.5.5 0 01.5.5v18a.5.5 0 01-.5.5h-7.5M3.5 21.223a.5.5 0 00.392.488l8 1.777A.5.5 0 0012.5 23V1a.5.5 0 00-.608-.488l-8 1.778a.5.5 0 00-.392.488z"
    />,
    <circle className="login-2_svg__a" cx={9} cy={12} r={1.5} />
  );

export default SvgLogin2;
