import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-image_svg__a"
      d="M8.25 23.25H3A2.25 2.25 0 01.75 21M18.75 8.25V1.5A.75.75 0 0018 .75H3.75a3 3 0 00-3 3V21A2.25 2.25 0 013 18.75h5.25"
    />,
    <rect
      className="book-image_svg__a"
      x={11.25}
      y={11.25}
      width={12}
      height={12}
      rx={1}
      ry={1}
    />,
    <path
      className="book-image_svg__a"
      d="M15.375 14.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M23.25 21l-2.391-3.587a.75.75 0 00-1.239-.013l-2 2.851-1.236-.989a.751.751 0 00-1.093.17L12.75 23.25"
    />
  );

export default SvgBookImage;
