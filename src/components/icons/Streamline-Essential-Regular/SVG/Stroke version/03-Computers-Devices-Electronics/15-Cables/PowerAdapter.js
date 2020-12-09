import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPowerAdapter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".power-adapter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="power-adapter_svg__a"
      d="M15 1.952V3.5a.75.75 0 01-.75.75h-4.5A.75.75 0 019 3.5V1.958a.758.758 0 00-1.04-.7A11.255 11.255 0 00.992 14.119a10.968 10.968 0 008.744 8.66 11.25 11.25 0 006.248-21.54.744.744 0 00-.984.713z"
    />,
    <path
      className="power-adapter_svg__a"
      d="M12 14a1.5 1.5 0 01-1.5-1.5V8.75a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5v3.75A1.5 1.5 0 0112 14zM5.625 13.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M8.625 17.75a.375.375 0 10.375.375.375.375 0 00-.375-.375M15.375 17.75a.375.375 0 10.375.375.375.375 0 00-.375-.375M18.375 13.25a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgPowerAdapter;
