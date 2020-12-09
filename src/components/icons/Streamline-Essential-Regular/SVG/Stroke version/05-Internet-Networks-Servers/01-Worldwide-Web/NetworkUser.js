import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-user_svg__a"
      d="M9.735 23.023a11.251 11.251 0 1113.418-12.511M9.289 22.922C7.768 20.689 6.75 16.634 6.75 12S7.768 3.312 9.289 1.079M.775 11.251H12.75M2.999 5.251H21M2.048 17.251H10.5M14.711 1.079a16.184 16.184 0 012.2 6.42"
    />,
    <circle className="network-user_svg__a" cx={18} cy={13.126} r={2.625} />,
    <path
      className="network-user_svg__a"
      d="M18 16.5a5.25 5.25 0 00-5.25 5.25v1.5h10.5v-1.5A5.249 5.249 0 0018 16.5z"
    />
  );

export default SvgNetworkUser;
