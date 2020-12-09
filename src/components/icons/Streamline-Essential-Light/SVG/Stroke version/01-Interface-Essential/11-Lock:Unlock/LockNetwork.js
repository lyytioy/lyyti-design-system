import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockNetwork = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-network_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="lock-network_svg__a" d="M17.011 7.02l3.107-3.086" />,
    <circle className="lock-network_svg__a" cx={21.511} cy={2.5} r={2} />,
    <path className="lock-network_svg__a" d="M17.973 17.979l2.114 2.128" />,
    <circle className="lock-network_svg__a" cx={21.521} cy={21.5} r={2} />,
    <path className="lock-network_svg__a" d="M7.011 7.02L3.903 3.934" />,
    <circle className="lock-network_svg__a" cx={2.511} cy={2.5} r={2} />,
    <path className="lock-network_svg__a" d="M6.049 17.979l-2.115 2.128" />,
    <circle className="lock-network_svg__a" cx={2.5} cy={21.5} r={2} />,
    <path className="lock-network_svg__a" d="M6.5 12h-2" />,
    <circle className="lock-network_svg__a" cx={2.5} cy={12} r={2} />,
    <path className="lock-network_svg__a" d="M17.5 12h2" />,
    <circle className="lock-network_svg__a" cx={21.5} cy={12} r={2} />,
    <path
      className="lock-network_svg__a"
      d="M12 13.25a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <path
      className="lock-network_svg__a"
      d="M15.5 15.5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4a1 1 0 011-1h5a1 1 0 011 1zM9.5 10.5V9a2.5 2.5 0 015 0v1.5"
    />
  );

export default SvgLockNetwork;
