import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingWinnerBadge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-winner-badge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ranking-winner-badge_svg__a"
      d="M16 17.856v4.79a.5.5 0 01-.854.354L12 19.854 8.854 23A.5.5 0 018 22.646v-4.79"
    />,
    <circle className="ranking-winner-badge_svg__a" cx={12} cy={8.853} r={8} />,
    <circle
      className="ranking-winner-badge_svg__a"
      cx={12}
      cy={8.853}
      r={5.5}
    />,
    <path
      className="ranking-winner-badge_svg__a"
      d="M12 10.856v-4.5a.5.5 0 00-.8-.4l-1.2.9M10.996 10.856h2"
    />
  );

export default SvgRankingWinnerBadge;
