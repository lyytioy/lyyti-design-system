import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServerCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server-cash_svg__a"
      d="M5.251 4.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M5.251 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server-cash_svg__a"
      d="M12 9.75H5.251a4.5 4.5 0 010-9h12a4.5 4.5 0 013.014 7.841M8.251 18.75h-3a4.5 4.5 0 010-9M10.501 5.25h6.75M18.751 14.25h-2.033a1.342 1.342 0 00-.5 2.587l2.063.826a1.341 1.341 0 01-.5 2.587h-2.03M17.251 14.25v-.75M17.251 21v-.75"
    />,
    <circle className="server-cash_svg__a" cx={17.251} cy={17.25} r={6} />
  );

export default SvgServerCash;
