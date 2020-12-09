import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveToTop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-to-top_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="move-to-top_svg__a"
      d="M.75 17.248h6v6h-6zM.75 13.498v.75h1.5M2.25 9.748H.75v.75M6.75 10.498v-.75h-1.5M2.25.748H.75v1.5M6.75 2.248v-1.5h-1.5M5.25 14.248h1.5v-.75M.75 5.248v1.5h1.5M5.25 6.748h1.5v-1.5M15 8.248l-3.75-3.75L15 .748"
    />,
    <path
      className="move-to-top_svg__a"
      d="M11.25 4.5h4.5a7.5 7.5 0 010 15h-4.5"
    />
  );

export default SvgMoveToTop;
