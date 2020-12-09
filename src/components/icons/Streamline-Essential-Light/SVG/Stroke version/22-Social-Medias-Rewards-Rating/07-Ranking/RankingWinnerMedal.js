import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingWinnerMedal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-winner-medal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ranking-winner-medal_svg__a"
      d="M5.1.5h13.8M16.709 5.1H7.291M10.652 12.159L5.1.5 1.689 4.4a1.15 1.15 0 00-.054 1.448L7.7 13.933M13.348 12.159L18.9.5l3.411 3.9a1.15 1.15 0 01.054 1.448L16.3 13.933M12.575 20.05v-4.025a.575.575 0 00-.92-.46l-1.38 1.035M11.425 20.05h2.3"
    />,
    <circle
      className="ranking-winner-medal_svg__a"
      cx={12}
      cy={17.75}
      r={5.75}
    />
  );

export default SvgRankingWinnerMedal;
