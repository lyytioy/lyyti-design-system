import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearchText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".search-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="search-text_svg__a" cx={9.75} cy={9.748} r={9} />,
    <path
      className="search-text_svg__a"
      d="M16.114 16.112l7.136 7.136M3.75 10.5A2.25 2.25 0 016 8.248h7.5a2.25 2.25 0 012.25 2.25M9.75 21.748v1.5M6.719 23.248h6M9.75 8.248v7.5"
    />
  );

export default SvgSearchText;
