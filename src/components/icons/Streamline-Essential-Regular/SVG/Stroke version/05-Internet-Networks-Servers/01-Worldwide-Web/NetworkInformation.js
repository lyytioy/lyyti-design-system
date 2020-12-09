import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="network-information_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="network-information_svg__a"
      d="M17.25 20.25v-3M17.25 14.311a.375.375 0 10.375.375.375.375 0 00-.375-.375M10.5 23.151A11.251 11.251 0 1123.15 10.5"
    />,
    <path
      className="network-information_svg__a"
      d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.775 11.25H10.5M2.999 5.25H21M2.048 17.25h5.166M14.711 1.079a17.025 17.025 0 012.309 7.176"
    />
  );

export default SvgNetworkInformation;
