import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingWirelessCharging = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-wireless-charging_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="charging-wireless-charging_svg__a"
      x={3.563}
      y={10.5}
      width={16.5}
      height={9}
      rx={2}
      ry={2}
      transform="rotate(-45 11.812 15)"
    />,
    <path
      className="charging-wireless-charging_svg__a"
      d="M11.283 21.894L4.919 15.53M12 7.813v-2.75a1.25 1.25 0 00-1.25-1.25 1.25 1.25 0 01-1.25-1.25V.813M3 9.313a3 3 0 013-3M.5 9.313a5.5 5.5 0 015.5-5.5M21 9.313a3 3 0 00-3-3M23.5 9.313a5.5 5.5 0 00-5.5-5.5M7 19.563a.25.25 0 11-.25.25.25.25 0 01.25-.25M12.611 7.838A7.682 7.682 0 0012 7.813a7.5 7.5 0 00-7.5 7.5c0 .206.009.41.025.611M10.575 22.6a1.299 1.299 0 01-.066.063 7.5 7.5 0 008.843-8.839"
    />
  );

export default SvgChargingWirelessCharging;
