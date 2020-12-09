import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="notes-star_svg__a"
      d="M17.947 11.68l1.541 4.07h3a.735.735 0 01.518 1.283l-2.6 1.816 1.442 3.313a.786.786 0 01-1.119.982l-3.489-1.961-3.487 1.961a.786.786 0 01-1.119-.982l1.443-3.313-2.6-1.816a.734.734 0 01.515-1.283h3l1.544-4.07a.8.8 0 011.411 0z"
    />,
    <path
      className="notes-star_svg__a"
      d="M8.25 20.25h-6a1.464 1.464 0 01-1.5-1.5V3.857a1.556 1.556 0 011.5-1.607h15a1.556 1.556 0 011.5 1.607V8.25M5.25.75v4.5M9.75.75v4.5M14.25.75v4.5"
    />
  );

export default SvgNotesStar;
