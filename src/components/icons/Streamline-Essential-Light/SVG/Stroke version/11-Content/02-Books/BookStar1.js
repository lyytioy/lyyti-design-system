import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookStar1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-star-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-star-1_svg__a"
      d="M21.5.5h-17a2 2 0 000 4h16a1 1 0 011 1v17a1 1 0 01-1 1h-16a2 2 0 01-2-2v-19M4.5 2.5h16"
    />,
    <path
      className="book-star-1_svg__a"
      d="M12.7 7.93l1.539 3.57h3a.735.735 0 01.517 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982L12 17.433l-3.48 1.961a.785.785 0 01-1.12-.982L8.839 15.1l-2.6-2.315a.735.735 0 01.515-1.285h3l1.536-3.57a.8.8 0 011.41 0z"
    />
  );

export default SvgBookStar1;
