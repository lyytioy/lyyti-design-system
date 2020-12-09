import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingStarsRibbon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-stars-ribbon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ranking-stars-ribbon_svg__a"
      d="M4.807 13.042L.75 18l3.75.75 1.5 4.5 3.944-6.258M19.193 13.042L23.25 18l-3.75.75-1.5 4.5-3.944-6.258"
    />,
    <circle className="ranking-stars-ribbon_svg__a" cx={12} cy={9} r={8.25} />,
    <path
      className="ranking-stars-ribbon_svg__a"
      d="M11.25 5.25H12a.75.75 0 01.75.75v5.25M11.25 11.25h3"
    />
  );

export default SvgRankingStarsRibbon;
