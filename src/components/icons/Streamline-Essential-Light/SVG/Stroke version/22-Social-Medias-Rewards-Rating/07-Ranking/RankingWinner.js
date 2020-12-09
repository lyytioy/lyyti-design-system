import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingWinner = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-winner_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ranking-winner_svg__a"
      d="M16.5 14V4a1 1 0 00-1-1h-7a1 1 0 00-1 1v6h-6a1 1 0 00-1 1v9a1 1 0 001 1h21a1 1 0 001-1v-5a1 1 0 00-1-1z"
    />,
    <path
      className="ranking-winner_svg__a"
      d="M11 6h.5a.5.5 0 01.5.5V10M11 10h2M7.5 10v11M16.5 14v7"
    />
  );

export default SvgRankingWinner;
