import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingWinnerRibbon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-winner-ribbon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="ranking-winner-ribbon_svg__a" cx={12} cy={9} r={8.25} />,
    <path
      className="ranking-winner-ribbon_svg__a"
      d="M15.75 16.349l1.5 6.901-5.25-3-5.25 3 1.5-6.901M11.25 5.25H12a.75.75 0 01.75.75v5.25M11.25 11.25h3"
    />
  );

export default SvgRankingWinnerRibbon;
