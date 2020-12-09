import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingWinnerMedal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-winner-medal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="ranking-winner-medal_svg__a"
      cx={12}
      cy={16.5}
      r={6.75}
    />,
    <path
      className="ranking-winner-medal_svg__a"
      d="M5.851 13.714L.75 5.25l3-4.5 5.582 9.549M10.5 13.5h.75a.75.75 0 01.75.75v5.25M10.5 19.5h3M18.149 13.714L23.25 5.25l-3-4.5-5.582 9.549M20.25.75H3.75"
    />
  );

export default SvgRankingWinnerMedal;
