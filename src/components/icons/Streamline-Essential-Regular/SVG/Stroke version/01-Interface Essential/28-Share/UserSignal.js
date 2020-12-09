import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUserSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".user-signal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="user-signal_svg__a" cx={12} cy={7.875} r={2.625} />,
    <path
      className="user-signal_svg__a"
      d="M15.75 17.25V15a3.75 3.75 0 00-7.5 0v2.25h1.5l.75 6h3l.75-6zM18 7.493A7.513 7.513 0 0118.876 15M6 7.493A7.513 7.513 0 005.124 15M3 18.75a11.25 11.25 0 1118 0"
    />
  );

export default SvgUserSignal;
