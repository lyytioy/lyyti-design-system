import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneRotate1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-rotate-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="phone-rotate-1_svg__a"
      x={8.093}
      y={4.54}
      width={7.815}
      height={14.92}
      rx={1.421}
      ry={1.421}
      transform="rotate(-45 12 12)"
    />,
    <path
      className="phone-rotate-1_svg__a"
      d="M3.556 23.345L8.94 22.1l-2.702-4.82M8.94 22.1A10.491 10.491 0 011.7 10.037M20.444.655L15.06 1.9l2.702 4.82M15.06 1.9a10.491 10.491 0 017.245 12.063"
    />
  );

export default SvgPhoneRotate1;
