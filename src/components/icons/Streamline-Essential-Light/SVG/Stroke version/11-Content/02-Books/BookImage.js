import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-image_svg__a"
      d="M21.5.5h-17a2 2 0 000 4h16a1 1 0 011 1v17a1 1 0 01-1 1h-16a2 2 0 01-2-2v-19M4.5 2.5h16"
    />,
    <path
      className="book-image_svg__a"
      d="M17.5 20.5h-10a1 1 0 01-1-1v-10a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1z"
    />,
    <circle className="book-image_svg__a" cx={10.622} cy={12.5} r={1.5} />,
    <path
      className="book-image_svg__a"
      d="M18.5 18.25l-2.391-3.587a.75.75 0 00-1.239-.014l-2 2.851-1.236-.989a.751.751 0 00-1.093.17L8 20.5"
    />
  );

export default SvgBookImage;
