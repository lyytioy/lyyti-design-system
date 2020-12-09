import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="read-email-circle_svg__a" cx={12} cy={12} r={11.25} />,
    <rect
      className="read-email-circle_svg__a"
      x={5.25}
      y={6.75}
      width={13.5}
      height={10.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="read-email-circle_svg__a" d="M5.25 8.25L12 12l6.75-3.75" />
  );

export default SvgReadEmailCircle;
