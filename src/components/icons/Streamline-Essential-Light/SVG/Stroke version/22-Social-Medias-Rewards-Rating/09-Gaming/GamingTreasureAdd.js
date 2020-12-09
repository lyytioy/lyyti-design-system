import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGamingTreasureAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gaming-treasure-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="gaming-treasure-add_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path className="gaming-treasure-add_svg__a" d="M20.5 17.5h-6" />,
    <circle className="gaming-treasure-add_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="gaming-treasure-add_svg__a"
      d="M17.5 14.5v6M20.5 17.5h-6M20.5 4.5a4 4 0 00-4-4h-12a4 4 0 00-4 4v2h20v-2z"
    />,
    <path
      className="gaming-treasure-add_svg__a"
      d="M8.5.5c-3 0-3 4-3 4v2M12.5.5c3 0 3 4 3 4v2M20.5 10V6.5H.5v9a2 2 0 002 2h7"
    />,
    <path
      className="gaming-treasure-add_svg__a"
      d="M.5 8.5h8v1a2 2 0 002 2 2 2 0 002-2v-1h8M10.5 8.5v1M5.5 8.5v9"
    />
  );

export default SvgGamingTreasureAdd;
