import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlipVerticalUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flip-vertical-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flip-vertical-up_svg__a"
      d="M9.143 6.749l4.404-.527.665 4.447M.75 14.248v7.5a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-7.5M.75 11.248h4.5M17.25 11.248h6M.75 6.748v1.5M23.25 6.748v1.5M5.25.748h1.5M11.25.748h1.5M17.25.748h1.5M2.25.748a1.5 1.5 0 00-1.5 1.5M23.25 2.248a1.5 1.5 0 00-1.5-1.5"
    />,
    <path
      className="flip-vertical-up_svg__a"
      d="M15 18.364A6.753 6.753 0 0110.5 12a7.2 7.2 0 013.047-5.776"
    />
  );

export default SvgFlipVerticalUp;
