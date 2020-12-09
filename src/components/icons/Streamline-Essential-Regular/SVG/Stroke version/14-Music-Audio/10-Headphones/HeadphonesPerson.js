import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphonesPerson = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-person_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="headphones-person_svg__a"
      x={19.5}
      y={9.75}
      width={3}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="headphones-person_svg__a"
      x={1.5}
      y={9.75}
      width={3}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="headphones-person_svg__a"
      d="M19.5 12V8.25A7.522 7.522 0 0012 .75a7.522 7.522 0 00-7.5 7.5V12"
    />,
    <circle className="headphones-person_svg__a" cx={12} cy={11.25} r={4.5} />,
    <path
      className="headphones-person_svg__a"
      d="M18.365 23.25a6.751 6.751 0 00-12.73 0"
    />
  );

export default SvgHeadphonesPerson;
