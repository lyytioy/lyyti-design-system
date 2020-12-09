import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkUsers = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-users_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="network-users_svg__a"
      cx={4.975}
      cy={16.875}
      r={2.625}
    />,
    <path
      className="network-users_svg__a"
      d="M9.2 23.25a4.474 4.474 0 00-8.449 0z"
    />,
    <circle
      className="network-users_svg__a"
      cx={19.026}
      cy={16.875}
      r={2.625}
    />,
    <path
      className="network-users_svg__a"
      d="M23.25 23.25a4.474 4.474 0 00-8.449 0z"
    />,
    <circle className="network-users_svg__a" cx={12} cy={7.5} r={6.75} />,
    <path
      className="network-users_svg__a"
      d="M5.634 9.75h12.732M5.634 5.25h12.732M10.544.908a21.863 21.863 0 00.51 13.276M13.456.908a21.734 21.734 0 01.794 5.842 21.7 21.7 0 01-1.3 7.434"
    />
  );

export default SvgNetworkUsers;
