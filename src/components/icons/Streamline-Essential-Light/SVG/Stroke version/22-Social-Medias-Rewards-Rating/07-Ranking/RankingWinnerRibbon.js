import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRankingWinnerRibbon = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ranking-winner-ribbon_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ranking-winner-ribbon_svg__a"
      d="M4.148 14.034L.56 20.181c-.138.238-.028.395.243.349l3.358-.569 1.164 3.2c.094.258.286.277.427.04l3.065-5.148M19.852 14.034l3.588 6.147c.138.238.028.395-.243.349l-3.358-.569-1.164 3.2c-.094.258-.286.277-.427.04l-3.065-5.148"
    />,
    <circle
      className="ranking-winner-ribbon_svg__a"
      cx={12}
      cy={9.632}
      r={9}
    />,
    <path
      className="ranking-winner-ribbon_svg__a"
      d="M12.5 12.632v-6l-2 .686"
    />
  );

export default SvgRankingWinnerRibbon;
