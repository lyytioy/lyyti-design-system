import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUserLive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".user-live_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="user-live_svg__a"
      d="M10 23v-5M12 18v1.7a5.954 5.954 0 001 3.3 5.954 5.954 0 001-3.3V18M6 18v4a1 1 0 001 1h1M18 23h-1a1 1 0 01-1-1v-3a1 1 0 011-1h1M16 21h2"
    />,
    <circle className="user-live_svg__a" cx={12} cy={8.75} r={1.75} />,
    <path
      className="user-live_svg__a"
      d="M15.5 14a3.612 3.612 0 00-7 0zM7.981 10.975a5 5 0 118.032.009M6.5 12.327a7 7 0 1111.026-.027"
    />
  );

export default SvgUserLive;
