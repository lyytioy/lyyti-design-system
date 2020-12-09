import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgListRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".list-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="list-remove_svg__a"
      d="M5.25 2.123h15M5.25 8.123h15M5.25 14.123h3M1.125 1.748a.375.375 0 11-.375.375.375.375 0 01.375-.375M1.125 7.748a.375.375 0 11-.375.375.375.375 0 01.375-.375M1.125 13.748a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle className="list-remove_svg__a" cx={17.25} cy={17.123} r={6} />,
    <path className="list-remove_svg__a" d="M14.25 17.123h6" />
  );

export default SvgListRemove;
