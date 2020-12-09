import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLogout2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".logout-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="logout-2_svg__a"
      d="M23.5 12h-12M19.5 16l4-4-4-4M9.5 2.5H17a.5.5 0 01.5.5v2.5M17.5 18.5V21a.5.5 0 01-.5.5H9.5M.5 21.223a.5.5 0 00.392.488l8 1.777A.5.5 0 009.5 23V1a.5.5 0 00-.608-.488l-8 1.778a.5.5 0 00-.392.488z"
    />,
    <circle className="logout-2_svg__a" cx={6} cy={12} r={1.5} />
  );

export default SvgLogout2;
