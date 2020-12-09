import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-information_svg__a"
      d="M4.5 3.375a.375.375 0 10.375.375.374.374 0 00-.375-.375M9.752 3.75h1.5M14.252 3.75h1.5M4.5 9.375a.375.375 0 10.375.375.374.374 0 00-.375-.375M9.752 9.75h1.5M4.502 18.75h3.75v-6M1.127 18a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />,
    <path
      className="server-information_svg__a"
      d="M18.752 3.75a3 3 0 01-3 3h-12a3 3 0 010-6h12a3 3 0 013 3z"
    />,
    <path
      className="server-information_svg__a"
      d="M9.731 12.75H3.752a3 3 0 010-6h12a3 3 0 012.6 1.5"
    />,
    <circle
      className="server-information_svg__a"
      cx={17.251}
      cy={17.25}
      r={6}
    />,
    <path
      className="server-information_svg__a"
      d="M17.251 20.25v-3M17.251 14.25a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgServerInformation;
