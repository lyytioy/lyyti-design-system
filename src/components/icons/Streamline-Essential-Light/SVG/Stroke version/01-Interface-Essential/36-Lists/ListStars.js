import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgListStars = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".list-stars_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="list-stars_svg__a"
      d="M9.5 4.498h14M9.5 12.498h14M9.5 20.498h14M5.5 4.498h-5M4.5 1.998l-3 5M1.5 1.998l3 5M5.5 12.498h-5M4.5 9.998l-3 5M1.5 9.998l3 5M5.5 20.498h-5M4.5 17.998l-3 5M1.5 17.998l3 5"
    />
  );

export default SvgListStars;
