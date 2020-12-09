import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-off_svg__a"
      d="M16.078 3.075A13.992 13.992 0 002.2 6.6M12.588 7.512A9.972 9.972 0 005.03 10.43"
    />,
    <circle className="wifi-off_svg__a" cx={12.101} cy={20} r={2} />,
    <path
      className="wifi-off_svg__a"
      d="M22 7.1a13.886 13.886 0 00-1.413-1.237M19.172 10.43a10.081 10.081 0 00-1.783-1.42M16.344 14.757a5.973 5.973 0 00-2.762-1.572M21.601 1l-19 22"
    />
  );

export default SvgWifiOff;
