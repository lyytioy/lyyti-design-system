import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGamingTreasureFind = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gaming-treasure-find_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gaming-treasure-find_svg__a"
      d="M20.5 4.5a4 4 0 00-4-4h-12a4 4 0 00-4 4v2h20v-2z"
    />,
    <path
      className="gaming-treasure-find_svg__a"
      d="M8.5.5c-3 0-3 4-3 4v2M12.5.5c3 0 3 4 3 4v2M20.5 10V6.5H.5v9a2 2 0 002 2h7"
    />,
    <path
      className="gaming-treasure-find_svg__a"
      d="M.5 8.5h8v1a2 2 0 002 2 2 2 0 002-2v-1h8M10.5 8.5v1M5.5 8.5v9"
    />,
    <circle
      className="gaming-treasure-find_svg__a"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="gaming-treasure-find_svg__a"
      d="M20.174 15.756l-2.905 3.873a.752.752 0 01-1.131.081l-1.5-1.5"
    />
  );

export default SvgGamingTreasureFind;
