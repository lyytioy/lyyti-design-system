import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="search-circle_svg__a" cx={12} cy={12} r={11.25} />,
    <circle
      className="search-circle_svg__a"
      cx={11.125}
      cy={11.125}
      r={4.375}
    />,
    <path className="search-circle_svg__a" d="M14.219 14.218l3.031 3.032" />
  );

export default SvgSearchCircle;
