import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardRibbonStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-ribbon-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="award-ribbon-star_svg__a"
      d="M15.75 13.491l1.5 9.759-5.25-3-5.25 3 1.498-9.753"
    />,
    <path
      className="award-ribbon-star_svg__a"
      d="M17.882 8.25a3 3 0 00-2.941-5.094 3 3 0 00-5.882 0A3 3 0 006.118 8.25a3 3 0 002.941 5.094 3 3 0 005.882 0 3 3 0 002.941-5.094z"
    />,
    <circle className="award-ribbon-star_svg__a" cx={12} cy={8.25} r={2.25} />
  );

export default SvgAwardRibbonStar;
