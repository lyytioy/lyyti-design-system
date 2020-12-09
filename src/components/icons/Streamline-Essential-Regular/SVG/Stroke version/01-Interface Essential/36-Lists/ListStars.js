import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgListStars = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".list-stars_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="list-stars_svg__a"
      d="M8.25 3.748h15M8.25 12.748h15M8.25 21.748h15M.75.748l4.5 4.5M.75 5.248l4.5-4.5M.75 9.748l4.5 4.5M.75 14.248l4.5-4.5M.75 18.748l4.5 4.5M.75 23.248l4.5-4.5"
    />
  );

export default SvgListStars;
