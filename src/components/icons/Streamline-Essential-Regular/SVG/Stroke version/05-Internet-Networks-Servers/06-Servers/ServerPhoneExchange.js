import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerPhoneExchange = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-phone-exchange_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="server-phone-exchange_svg__a"
      x={12.751}
      y={0.75}
      width={10.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="server-phone-exchange_svg__a"
      d="M12.751 6.75h10.5M15.751 3.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M15.751 9.375a.375.375 0 10.375.375.375.375 0 00-.375-.375M20.251 3.75h-1.5M20.251 9.75h-1.5M5.251 6.75L3 9V6.75a3 3 0 013-3h4.5M.751 6.75L3.001 9"
    />,
    <path
      className="server-phone-exchange_svg__a"
      d="M8.251 1.5l2.25 2.25L8.251 6M4.5 19.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <rect
      className="server-phone-exchange_svg__a"
      x={0.751}
      y={11.25}
      width={7.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgServerPhoneExchange;
