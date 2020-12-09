import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveToBottom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-to-bottom_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="move-to-bottom_svg__a"
      d="M.75.748h6v6h-6zM.75 10.498v-.75h1.5M2.25 14.248H.75v-.75M6.75 13.498v.75h-1.5M2.25 23.248H.75v-1.5M6.75 21.748v1.5h-1.5M5.25 9.748h1.5v.75M.75 18.748v-1.5h1.5M5.25 17.248h1.5v1.5M15 15.748l-3.75 3.75 3.75 3.75"
    />,
    <path
      className="move-to-bottom_svg__a"
      d="M11.25 19.5h4.5a7.5 7.5 0 000-15h-4.5"
    />
  );

export default SvgMoveToBottom;
