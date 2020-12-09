import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUserLogout = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".user-logout_svg__a,.user-logout_svg__b{fill:none;stroke:currentColor;stroke-linejoin:round;stroke-width:1.5px}.user-logout_svg__a{stroke-linecap:round}"
        }
      </style>
    </defs>,
    <path
      className="user-logout_svg__a"
      d="M20.999 2.254l2.25 3h-7.5M21 8.254l2.25-3"
    />,
    <circle className="user-logout_svg__b" cx={6.75} cy={3.754} r={3} />,
    <path
      className="user-logout_svg__b"
      d="M6.75 7.5a6 6 0 00-6 6v2.25a1.5 1.5 0 001.5 1.5h1.5v4.5a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 001.5-1.5v-4.5h1.5a1.5 1.5 0 001.5-1.5V13.5a6 6 0 00-6-6z"
    />
  );

export default SvgUserLogout;
