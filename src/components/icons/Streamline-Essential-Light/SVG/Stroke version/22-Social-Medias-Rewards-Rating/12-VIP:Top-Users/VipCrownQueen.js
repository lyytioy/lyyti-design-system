import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVipCrownQueen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vip-crown-queen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="vip-crown-queen_svg__a"
      d="M21.01 23.5h-18a1.5 1.5 0 110-3h18a1.5 1.5 0 010 3zM19.841 13.08a6.362 6.362 0 00-5.573-3.027 2.5 2.5 0 01-4.527.019 5.947 5.947 0 00-5.582 3.008"
    />,
    <circle className="vip-crown-queen_svg__a" cx={12} cy={9} r={2.5} />,
    <path
      className="vip-crown-queen_svg__a"
      d="M12 .5v6M10 2.5h4M2 20.859A4.5 4.5 0 119.5 17.5v3M22 20.859a4.5 4.5 0 10-7.5-3.359v3M12 11.5v9"
    />
  );

export default SvgVipCrownQueen;
