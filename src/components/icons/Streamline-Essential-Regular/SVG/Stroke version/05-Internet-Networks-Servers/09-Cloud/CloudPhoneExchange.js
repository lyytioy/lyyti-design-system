import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudPhoneExchange = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-phone-exchange_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-phone-exchange_svg__a"
      d="M19.5 19.876a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <rect
      className="cloud-phone-exchange_svg__a"
      x={15.75}
      y={11.251}
      width={7.5}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="cloud-phone-exchange_svg__a"
      d="M3 15.001l2.25-2.25 2.25 2.25M9 18.001l2.25 2.25L9 22.501M12 3.751a2.981 2.981 0 00-2.292 1.085A4.489 4.489 0 105.25 9.751H12a3 3 0 000-6z"
    />,
    <path
      className="cloud-phone-exchange_svg__a"
      d="M5.25 12.751v4.5a3 3 0 003 3h3"
    />
  );

export default SvgCloudPhoneExchange;
