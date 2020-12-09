import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUserLogout = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".user-logout_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="user-logout_svg__a"
      d="M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6z"
    />,
    <circle className="user-logout_svg__a" cx={5.5} cy={4} r={3.5} />,
    <path className="user-logout_svg__a" d="M20.5 11.5l3-3-3-3M13.5 8.5h10" />
  );

export default SvgUserLogout;
