import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-target_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="read-email-target_svg__a"
      x={6.75}
      y={8.25}
      width={10.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="read-email-target_svg__a"
      d="M6.75 9.75l5.25 3 5.25-3M5.25 18.75l-4.5 4.5M18.75 18.75l4.5 4.5M5.25 5.25L.75.75M18.75 5.25l4.5-4.5M21.789 17.547a11.261 11.261 0 000-11.094M6.453 21.789a11.261 11.261 0 0011.094 0M2.211 6.453a11.261 11.261 0 000 11.094M17.547 2.211a11.261 11.261 0 00-11.094 0"
    />
  );

export default SvgReadEmailTarget;
