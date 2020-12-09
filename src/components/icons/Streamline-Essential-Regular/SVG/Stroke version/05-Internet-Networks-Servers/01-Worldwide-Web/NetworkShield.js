import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-shield_svg__a"
      d="M23.25 15.75a7.669 7.669 0 01-6 7.5 7.669 7.669 0 01-6-7.5v-3a1.5 1.5 0 011.5-1.5h9a1.5 1.5 0 011.5 1.5zM17.25 15v4.5M15 17.25h4.5M11.24 23.225a11.25 11.25 0 1111.362-15"
    />,
    <path
      className="network-shield_svg__a"
      d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.775 11.25H8.25M2.999 5.25H21M2.048 17.25H8.25M14.711 1.079a17.009 17.009 0 012.307 7.159"
    />
  );

export default SvgNetworkShield;
