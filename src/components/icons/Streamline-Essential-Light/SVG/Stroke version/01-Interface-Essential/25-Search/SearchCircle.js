import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="search-circle_svg__a"
      cx={11.137}
      cy={11.137}
      r={5.137}
    />,
    <path className="search-circle_svg__a" d="M14.769 14.769L18 18" />,
    <circle className="search-circle_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgSearchCircle;
