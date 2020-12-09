import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlipVerticalDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flip-vertical-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flip-vertical-down_svg__a"
      d="M9.143 17.248l4.404.527.665-4.447M.75 9.748v-7.5a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v7.5M.75 12.748h4.5M17.25 12.748h6M.75 17.248v-1.5M23.25 17.248v-1.5M5.25 23.248h1.5M11.25 23.248h1.5M17.25 23.248h1.5M2.25 23.248a1.5 1.5 0 01-1.5-1.5M23.25 21.748a1.5 1.5 0 01-1.5 1.5"
    />,
    <path
      className="flip-vertical-down_svg__a"
      d="M15 5.633A6.753 6.753 0 0010.5 12a7.2 7.2 0 003.047 5.777"
    />
  );

export default SvgFlipVerticalDown;
