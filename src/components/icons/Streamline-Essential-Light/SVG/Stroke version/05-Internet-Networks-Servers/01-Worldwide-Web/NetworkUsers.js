import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkUsers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-users_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="network-users_svg__a"
      d="M12 14.5c-2-1.5-3-4.5-3-7s1-5.5 3-7M12 14.5c2-1.5 3-4.5 3-7s-1-5.5-3-7M5.674 4.5h12.652M5.674 10.5h12.652M5 7.5h14"
    />,
    <circle className="network-users_svg__a" cx={12} cy={7.5} r={7} />,
    <circle className="network-users_svg__a" cx={4.5} cy={18.25} r={1.75} />,
    <path className="network-users_svg__a" d="M8 23.5a3.612 3.612 0 00-7 0z" />,
    <circle className="network-users_svg__a" cx={19.5} cy={18.25} r={1.75} />,
    <path className="network-users_svg__a" d="M23 23.5a3.612 3.612 0 00-7 0z" />
  );

export default SvgNetworkUsers;
