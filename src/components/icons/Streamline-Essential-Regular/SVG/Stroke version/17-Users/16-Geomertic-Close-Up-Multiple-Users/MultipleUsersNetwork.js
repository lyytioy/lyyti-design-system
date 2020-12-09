import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleUsersNetwork = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-users-network_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-users-network_svg__cls-1"
      cx={12}
      cy={6.75}
      r={6}
    />,
    <path className="multiple-users-network_svg__cls-1" d="M6 6.75h12" />,
    <ellipse
      className="multiple-users-network_svg__cls-1"
      cx={12}
      cy={6.75}
      rx={2.25}
      ry={6}
    />,
    <circle
      className="multiple-users-network_svg__cls-1"
      cx={4.974}
      cy={16.875}
      r={2.625}
    />,
    <path
      className="multiple-users-network_svg__cls-1"
      d="M9.2 23.25a4.474 4.474 0 00-8.449 0"
    />,
    <circle
      className="multiple-users-network_svg__cls-1"
      cx={19.026}
      cy={16.875}
      r={2.625}
    />,
    <path
      className="multiple-users-network_svg__cls-1"
      d="M23.25 23.25a4.474 4.474 0 00-8.449 0"
    />
  );

export default SvgMultipleUsersNetwork;
