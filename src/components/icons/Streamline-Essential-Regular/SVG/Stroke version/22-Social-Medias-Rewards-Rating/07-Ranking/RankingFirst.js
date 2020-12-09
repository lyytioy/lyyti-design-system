import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingFirst = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-first_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ranking-first_svg__a"
      d="M8.25 10.5h-6A1.5 1.5 0 00.75 12v6h7.5zM21.75 12h-6v6h7.5v-4.5a1.5 1.5 0 00-1.5-1.5zM14.25 6h-4.5a1.5 1.5 0 00-1.5 1.5V18h7.5V7.5a1.5 1.5 0 00-1.5-1.5zM4.5 13.875"
    />,
    <path
      className="ranking-first_svg__a"
      d="M4.5 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M19.5 14.625a.375.375 0 10.375.375.375.375 0 00-.375-.375M12 11.25a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgRankingFirst;
