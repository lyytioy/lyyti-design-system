import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="book-star_svg__a" d="M5.5 2.5h11a1 1 0 011 1v1" />,
    <path
      className="book-star_svg__a"
      d="M19.5 4.5v-3a1 1 0 00-1-1h-13a2 2 0 000 4h14a1 1 0 011 1v17a1 1 0 01-1 1h-14a2 2 0 01-2-2v-19"
    />,
    <path
      className="book-star_svg__a"
      d="M12.7 7.93l1.539 3.57h2.995a.735.735 0 01.517 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982L12 17.433l-3.48 1.961a.785.785 0 01-1.12-.982L8.841 15.1l-2.6-2.315a.735.735 0 01.515-1.285h2.995l1.541-3.57a.8.8 0 011.408 0z"
    />
  );

export default SvgBookStar;
