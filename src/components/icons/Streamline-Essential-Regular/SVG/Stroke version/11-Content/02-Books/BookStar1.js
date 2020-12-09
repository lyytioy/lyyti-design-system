import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookStar1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-star-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-star-1_svg__a"
      d="M9 23.25H3.75A2.25 2.25 0 011.5 21M19.5 9V1.5a.75.75 0 00-.75-.75H4.5a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25H9"
    />,
    <path
      className="book-star-1_svg__a"
      d="M17.2 11.68L18.738 15h3a.735.735 0 01.518 1.283l-2.6 2.563 1.444 3.316a.786.786 0 01-1.119.982l-3.491-1.961L13 23.144a.786.786 0 01-1.119-.982l1.443-3.313-2.6-2.563A.734.734 0 0111.238 15h3l1.544-3.323a.8.8 0 011.418.003z"
    />
  );

export default SvgBookStar1;
