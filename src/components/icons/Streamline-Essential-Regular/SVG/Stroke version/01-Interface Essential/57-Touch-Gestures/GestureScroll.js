import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureScroll = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-scroll_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gesture-scroll_svg__a"
      d="M22.499 4.498l-3.75-3.75-3.75 3.75M18.749.748v22.5M22.499 19.498l-3.75 3.75-3.75-3.75M6.749 8.248v-1.5M.749 3.748H7.5a3.75 3.75 0 110 7.5H.749M8.249 15.748v-1.5"
    />,
    <path
      className="gesture-scroll_svg__a"
      d="M.749 11.248H9a3.75 3.75 0 010 7.5H.749"
    />
  );

export default SvgGestureScroll;
