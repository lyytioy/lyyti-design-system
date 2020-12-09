import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-warning_svg__a"
      d="M8.25 23.25h-6a1.5 1.5 0 01-1.5-1.5v-10.5h1.5v-3H.75v-6a1.5 1.5 0 011.5-1.5h10.56a1.5 1.5 0 011.139.524l4.44 4.305a1.5 1.5 0 01.361.976V9M6.75 3.75v3M11.25 3.75v3"
    />,
    <path
      className="sd-card-warning_svg__a"
      d="M15.354 13.29l-3.676 6.617a2.25 2.25 0 001.967 3.343H21a2.25 2.25 0 001.967-3.343l-3.68-6.617a2.249 2.249 0 00-3.933 0zM17.25 15.75V18"
    />,
    <path
      className="sd-card-warning_svg__a"
      d="M17.321 19.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgSdCardWarning;
