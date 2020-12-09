import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentBrushPen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-brush-pen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-brush-pen_svg__a"
      d="M2.501 18.5L15 5.997l3.001 3L5.503 21.5zM13.56 16.608L21 23.5c2 0 2.5-.5 2.5-2.5l-7.959-6.308M22.5 4.5a2.213 2.213 0 010 3l-5 5M2.25 21.75L.5 23.5"
    />,
    <path
      className="content-brush-pen_svg__a"
      d="M15 6L20.5.5l3 3L18 9zM3.249 19.25L1.5 20.999 3 22.5l1.75-1.75M3 .5c-.183 3.741 3.217 3.281 4.68 4.371a3.559 3.559 0 01.719 4.947C4.647 14.842-2.593 5.9 3 .5z"
    />
  );

export default SvgContentBrushPen;
