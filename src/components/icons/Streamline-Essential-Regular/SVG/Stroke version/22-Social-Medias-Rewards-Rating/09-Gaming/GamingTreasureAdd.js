import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGamingTreasureAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gaming-treasure-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="gaming-treasure-add_svg__a"
      cx={17.25}
      cy={17.249}
      r={6}
    />,
    <path
      className="gaming-treasure-add_svg__a"
      d="M17.25 14.249v6M14.25 17.249h6M.75 5.249h21M8.25 18.749h-6a1.5 1.5 0 01-1.5-1.5V7.5M21.75 9.749v-6a3 3 0 00-3-3h-15a3 3 0 00-3 3V7.5M6 8.249v10.5M6 5.249v-4.5M16.5.749v4.5M.75 8.249h21"
    />
  );

export default SvgGamingTreasureAdd;