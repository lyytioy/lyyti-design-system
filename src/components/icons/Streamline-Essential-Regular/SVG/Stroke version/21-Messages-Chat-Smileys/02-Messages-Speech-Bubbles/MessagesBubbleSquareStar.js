import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-star_svg__a"
      d="M8.223 19.9L3.75 23.25v-4.5h-1.5a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v9"
    />,
    <path
      className="messages-bubble-square-star_svg__a"
      d="M17.948 11.68L19.489 15h3a.735.735 0 01.518 1.283l-2.6 2.562 1.442 3.314a.786.786 0 01-1.119.982l-3.486-1.961-3.487 1.961a.786.786 0 01-1.119-.982l1.443-3.314-2.6-2.562A.734.734 0 0111.989 15h3l1.544-3.323a.8.8 0 011.415.003z"
    />
  );

export default SvgMessagesBubbleSquareStar;
