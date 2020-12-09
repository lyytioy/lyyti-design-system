import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingWinner = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-winner_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ranking-winner_svg__a"
      d="M10.5 5.25h.75A.75.75 0 0112 6v4.5M10.5 10.5h3"
    />,
    <path
      className="ranking-winner_svg__a"
      d="M16.5 23.25h-9v-21A1.5 1.5 0 019 .75h6a1.5 1.5 0 011.5 1.5zM23.25 21.75a1.5 1.5 0 01-1.5 1.5H16.5V13.5h5.25a1.5 1.5 0 011.5 1.5zM7.5 23.25H2.25a1.5 1.5 0 01-1.5-1.5V10.5A1.5 1.5 0 012.25 9H7.5z"
    />
  );

export default SvgRankingWinner;
