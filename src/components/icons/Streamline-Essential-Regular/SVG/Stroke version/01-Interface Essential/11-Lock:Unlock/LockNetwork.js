import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockNetwork = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lock-network_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="lock-network_svg__a" cx={21} cy={3} r={2.25} />,
    <circle className="lock-network_svg__a" cx={21} cy={12} r={2.25} />,
    <path
      className="lock-network_svg__a"
      d="M14.25 12h4.5M14.25 7.5l4.882-3.247"
    />,
    <circle className="lock-network_svg__a" cx={21} cy={21} r={2.25} />,
    <path className="lock-network_svg__a" d="M14.25 16.5l4.882 3.246" />,
    <rect
      className="lock-network_svg__a"
      x={0.75}
      y={9.75}
      width={10.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="lock-network_svg__a"
      d="M6 13.125a.375.375 0 10.375.375.374.374 0 00-.375-.375M2.25 9.75V7.5a3.75 3.75 0 017.5 0v2.25"
    />
  );

export default SvgLockNetwork;
