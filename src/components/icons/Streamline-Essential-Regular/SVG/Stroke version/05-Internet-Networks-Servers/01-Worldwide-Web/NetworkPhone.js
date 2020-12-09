import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkPhone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-phone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-phone_svg__a"
      d="M16.5 19.125a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <rect
      className="network-phone_svg__a"
      x={9.75}
      y={0.75}
      width={13.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="network-phone_svg__a"
      d="M6.75 6.042a14.173 14.173 0 00-1.5 6.708 14.2 14.2 0 001.487 6.685l.022 1.806a9 9 0 010-16.982zM.75 12.75h6M1.954 8.25H6.75M1.954 17.25H6.75"
    />
  );

export default SvgNetworkPhone;
